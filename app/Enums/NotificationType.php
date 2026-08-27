<?php

namespace App\Enums;
enum NotificationType: string
{
    case LIKE = 'like';
    case COMMENT = 'comment';
}
