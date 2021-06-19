import ApiService from "../api";

class UserService extends ApiService {

    constructor() {
        super('/users')
    }

    signup(user) {
        return this.post('/', user)
    }
}

export default UserService