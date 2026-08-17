import AuthController from './AuthController'
import GoogleController from './GoogleController'

const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
    GoogleController: Object.assign(GoogleController, GoogleController),
}

export default Controllers