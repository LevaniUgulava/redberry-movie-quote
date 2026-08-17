import AuthController from './AuthController'
import PasswordResetController from './PasswordResetController'
import GoogleController from './GoogleController'

const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
    PasswordResetController: Object.assign(PasswordResetController, PasswordResetController),
    GoogleController: Object.assign(GoogleController, GoogleController),
}

export default Controllers