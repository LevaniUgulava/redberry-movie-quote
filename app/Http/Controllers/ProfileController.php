<?php

namespace App\Http\Controllers;

use App\Http\Requests\Profile\UpdateUserRequest;
use App\Service\ProfileService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function __construct(
        private ProfileService $profileService,
    ) {}

    public function edit(): Response
    {
        return Inertia::render('Profile/Profile');
    }

    public function update(UpdateUserRequest $request): RedirectResponse
    {
        $user = auth()->user();
        $data = $request->only(['username']);

        if ($request->filled('password')) {
            $data['password'] = $this->profileService->passwordChange($request->validated(), $user);
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
