import ApiService from "../api";

class UserService extends ApiService {

    constructor() {
        super('/users')
    }

    signup(user) {
        return this.post('/', user)
    }

    login(userLogin) {
        return this.post('/login', userLogin)
    }

}

export default UserService