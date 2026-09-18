<?php

namespace App\Http\Controllers;

use App\Http\Requests\Profile\UpdateUserRequest;
use App\Service\ProfileService;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    use AuthorizesRequests;

    public function __construct(
        private ProfileService $profileService,
    ) {}

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
            $this->profileService->emailChange($request->validated(), $user);
        }

        if ($request->hasFile('avatar')) {
            $this->profileService->changeAvatar($user);
        }

        $user->update($data);
        Inertia::flash('updated');

        return back();
    }
}