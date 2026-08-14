<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Please verify your email address</title>
</head>
<body style="margin:0; padding:0; background-color:#0d0d17; font-family: Arial, Helvetica, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#0d0d17; padding:40px 0;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#0d0d17; border:1px solid #4b3f6b; border-radius:6px;">
                    <tr>
                        <td align="center" style="padding:40px 40px 20px 40px;">
                            <div style="font-size:22px; color:#ffffff;">&#128172;</div>
                            <div style="color:#ffffff; letter-spacing:2px; font-size:12px; margin-top:8px;">MOVIE QUOTES</div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:20px 50px 0 50px; color:#e5e5e5; font-size:15px; line-height:1.6;">
                            Hola {{$name}}!
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:15px 50px 0 50px; color:#e5e5e5; font-size:15px; line-height:1.6;">
                            Thanks for joining Movie Quotes! We really appreciate it. Please click the button below to verify your account:
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:25px 50px 0 50px;">
                            <a href="{{ $verificationUrl }}" style="background-color:#e6432b; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:4px; font-size:14px; display:inline-block;">
                                Verify account
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:30px 50px 0 50px; color:#e5e5e5; font-size:14px;">
                            If clicking doesn't work, you can try copying and pasting it to your browser:
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:10px 50px 0 50px; word-break:break-all;">
                            <a href="{{ $verificationUrl }}" style="color:#e6432b; font-size:13px; text-decoration:none;">
                                {{ $verificationUrl }}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:30px 50px 0 50px; color:#e5e5e5; font-size:14px;">
                            If you have any problems, please contact us: support@moviequotes.ge
                        </td>
                    </tr>
                    <tr>
                        <td style="padding:15px 50px 40px 50px; color:#e5e5e5; font-size:14px;">
                            MovieQuotes Crew
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>