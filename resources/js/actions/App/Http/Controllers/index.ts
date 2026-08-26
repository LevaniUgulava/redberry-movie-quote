import AuthController from './AuthController'
import PasswordResetController from './PasswordResetController'
import ProfileController from './ProfileController'
import QuoteController from './QuoteController'
import CommentController from './CommentController'
import LikeController from './LikeController'
import MovieController from './MovieController'
import GoogleController from './GoogleController'

const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
    PasswordResetController: Object.assign(PasswordResetController, PasswordResetController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    QuoteController: Object.assign(QuoteController, QuoteController),
    CommentController: Object.assign(CommentController, CommentController),
    LikeController: Object.assign(LikeController, LikeController),
    MovieController: Object.assign(MovieController, MovieController),
    GoogleController: Object.assign(GoogleController, GoogleController),
}

export default Controllers