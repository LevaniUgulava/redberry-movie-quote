<?php

namespace App\Http\Controllers;

use App\Http\Requests\Profile\UpdateUserRequest;
use App\Notifications\CustomEmailVerifyNotification;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    use AuthorizesRequests;

    public function edit(): Response
    {
        $this->authorize('view', auth()->user());

        return Inertia::render('Profile/Profile');
    }

    public function update(UpdateUserRequest $request): RedirectResponse
    {
        $user = auth()->user();
        $this->authorize('update', $user);

        $data = $request->only(['username']);
        if ($request->filled('password')) {
            if (! Hash::check($request->current_password, $user->password)) {
                throw ValidationException::withMessages([
                    'current_password' => __('The current password is incorrect.'),
                ]);
            }
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
            if ($user->hasMedia('avatar')) {
                $user->media()->delete();
            }
            $user->addMediaFromRequest('avatar')->toMediaCollection('avatar');
        }
        $user->update($data);
        Inertia::flash('updated');

        return back();
    }
}
