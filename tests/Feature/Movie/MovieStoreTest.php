<?php

use App\Models\Movie;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

function validMovieData(): array
{
    return [
        'en_title' => 'Interstellar',
        'ka_title' => 'ინტერსტელარი',
        'genres' => ['Sci-Fi', 'Drama'],
        'year' => 2014,
        'en_director' => 'Christopher Nolan',
        'ka_director' => 'კრისტოფერ ნოლანი',
        'en_description' => 'A team of explorers travel through a wormhole in space.',
        'ka_description' => 'მკვლევართა ჯგუფი მოგზაურობს კოსმოსურ ხვრელში.',
        'image' => UploadedFile::fake()->image('poster.jpg'),
    ];
}

test('authenticated and verified user can store a movie', function () {
    Storage::fake('public');

    $user = User::factory()->create();
    $data = validMovieData();

    $this->actingAs($user)
        ->post(localeUrl('/movies/store'), $data)
        ->assertRedirect(localeUrl('/movies'));

    $movie = Movie::query()->sole();

    expect($movie->user_id)->toBe($user->id)
        ->and($movie->getTranslation('title', 'en'))->toBe($data['en_title'])
        ->and($movie->getTranslation('title', 'ka'))->toBe($data['ka_title'])
        ->and($movie->year)->toBe('2014')
        ->and($movie->getTranslation('director', 'en'))->toBe($data['en_director'])
        ->and($movie->getTranslation('director', 'ka'))->toBe($data['ka_director'])
        ->and($movie->getTranslation('description', 'en'))->toBe($data['en_description'])
        ->and($movie->getTranslation('description', 'ka'))->toBe($data['ka_description']);

    expect($movie->genres->pluck('name')->toArray())->toBe(['Sci-Fi', 'Drama']);

    $media = $movie->getFirstMedia('movie');

    expect($media)->not->toBeNull()
        ->and($media->file_name)->toBe('poster.jpg');

    Storage::disk('public')->assertExists($media->getPathRelativeToRoot());
});

test('guest cannot store a movie', function () {
    $this->post(localeUrl('/movies/store'), validMovieData())
        ->assertRedirect(localeUrl('?modal=login'));

    expect(Movie::count())->toBe(0);
});

test('validation fails for invalid movie data', function (string $key, mixed $value) {
    $user = User::factory()->create();
    $data = validMovieData();
    data_set($data, $key, $value);

    $this->actingAs($user)
        ->post(localeUrl('/movies/store'), $data)
        ->assertSessionHasErrors($key);

    expect(Movie::count())->toBe(0);
})->with([
    'en_title is required' => ['en_title', null],
    'en_title max is 255 chars' => ['en_title', str_repeat('a', 256)],
    'ka_title is required' => ['ka_title', null],
    'ka_title max is 255 chars' => ['ka_title', str_repeat('a', 256)],
    'genres are required' => ['genres', null],
    'genres cannot be empty' => ['genres', []],
    'genre must be a string' => ['genres.0', 123],
    'genre max is 255 chars' => ['genres.0', str_repeat('b', 256)],
    'year is required' => ['year', null],
    'year must be an integer' => ['year', 'not-a-year'],
    'year must be at least 1888' => ['year', 1887],
    'year cannot be in the future' => ['year', date('Y') + 1],
    'en_director is required' => ['en_director', null],
    'en_director max is 255 chars' => ['en_director', str_repeat('a', 256)],
    'ka_director is required' => ['ka_director', null],
    'en_description is required' => ['en_description', null],
    'ka_description is required' => ['ka_description', null],
    'image is required' => ['image', null],
    'image must be a real image' => ['image', UploadedFile::fake()->create('document.txt')],
]);

test('boundary values pass validation', function (array $overrides) {
    $user = User::factory()->create();
    $data = array_merge(validMovieData(), $overrides);

    $this->actingAs($user)
        ->post(localeUrl('/movies/store'), $data)
        ->assertSessionHasNoErrors()
        ->assertRedirect(localeUrl('/movies'));

    expect(Movie::count())->toBe(1);
})->with([
    'earliest allowed year' => [['year' => 1888]],
    'current year' => [['year' => date('Y')]],
    'title with exactly 255 chars' => [['en_title' => str_repeat('a', 255)]],
]);
