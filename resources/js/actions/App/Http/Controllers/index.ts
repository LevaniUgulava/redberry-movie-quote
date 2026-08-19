import AuthController from './AuthController'
import GoogleController from './GoogleController'
import ProfileController from './ProfileController'

const Controllers = {
    AuthController: Object.assign(AuthController, AuthController),
    GoogleController: Object.assign(GoogleController, GoogleController),
    ProfileController: Object.assign(ProfileController, ProfileController),
}

export default Controllers