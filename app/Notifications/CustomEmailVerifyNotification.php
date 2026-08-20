<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\URL;

class CustomEmailVerifyNotification extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(
        protected User   $user,
        protected ?string $newEmail = null
    )
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $verificationUrl = $this->verificationUrl();

        return (new MailMessage)
            ->subject('Please verify your email address')
            ->view('email/email', [
                'name' => $this->user->username,
                'verificationUrl' => $verificationUrl,
            ]);
    }

    private function verificationUrl(): string
    {
        $emailToHash = $this->newEmail  ? $this->newEmail : $this->user->getEmailForVerification();

        return URL::temporarySignedRoute(
            'verification.verify',
            now()->addMinutes(120),
            [
                'id' => $this->user->getKey(),
                'hash' => sha1($emailToHash),
            ]
        );
    }
}
