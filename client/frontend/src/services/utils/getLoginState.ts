import axios from "axios"

//Missing return type on function and other ajdustments
export const getLoginState = async () => {  
    await axios.get("http://localhost:8080/auth/login", { withCredentials: true }).then((res) => {
        if (res.data && res.data.logged_in) {
            localStorage.setItem("token", res.data.token);
            return true;
        } else {
            return false;
        }
    }).catch((err) => {
        console.error(err);
    })
}