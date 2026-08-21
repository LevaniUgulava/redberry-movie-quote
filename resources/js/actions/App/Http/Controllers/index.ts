import AuthController from './AuthController'
import PasswordResetController from './PasswordResetController'
import ProfileController from './ProfileController'
import GoogleController from './GoogleController'

const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
    PasswordResetController: Object.assign(PasswordResetController, PasswordResetController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    GoogleController: Object.assign(GoogleController, GoogleController),
}

export default Controllers