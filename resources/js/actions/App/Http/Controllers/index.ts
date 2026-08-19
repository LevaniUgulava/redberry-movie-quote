import AuthController from './AuthController'
import PasswordResetController from './PasswordResetController'
import GoogleController from './GoogleController'
import ProfileController from './ProfileController'

const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
    PasswordResetController: Object.assign(PasswordResetController, PasswordResetController),
    GoogleController: Object.assign(GoogleController, GoogleController),
    ProfileController: Object.assign(ProfileController, ProfileController),
}

export default Controllers