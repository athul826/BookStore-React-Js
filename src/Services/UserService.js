import AxiosService from "./AxiosService";
const axiosService = new AxiosService();
let baseURL = 'http://127.0.0.1:8000/api'

const header = {
    headers: {
        token: localStorage.getItem("token")
    }
}

 class UserService {
    SignUp(data) {
        return axiosService.post(`${baseURL}/register`, data)
    }
    login(data) {
        return axiosService.post(`${baseURL}/login`,data)        
    }

    forgetPassword(data) {
        return axiosService.post(`${baseURL}/forgotPassword`,data)        
    }
}
export default UserService;