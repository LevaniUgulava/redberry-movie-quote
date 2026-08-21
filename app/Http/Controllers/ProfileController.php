<?php

namespace App\Http\Controllers;

use App\Http\Requests\Profile\UpdateUserRequest;
use App\Notifications\CustomEmailVerifyNotification;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Inertia\Inertia;
use Inertia\Response;
use function Laravel\Prompts\notify;

class ProfileController extends Controller
{
    public function edit(): Response
    {
        return Inertia::render('Profile/Profile');
    }

    public function update(UpdateUserRequest $request): RedirectResponse
    {
        $user = auth()->user();
        $data = $request->only(['username']);
        if ($request->filled('password')) {
            $data['password'] = Hash::make($request->password);
        }
        if ($request->filled('email')) {
            $user->emailChanges()->updateOrCreate(
                ['user_id' => $user->id],
                ['new_email' => $request->email]
            );
            Notification::route('mail', $request->email)
                ->notify(new CustomEmailVerifyNotification($user, $request->email));
            Inertia::flash('type', 'VERIFY_SENT');
        }
        if ($request->hasFile('avatar')) {
            $user->addMediaFromRequest('avatar')->toMediaCollection('avatar');
        }
        $user->update($data);
        return back();
    }
}
