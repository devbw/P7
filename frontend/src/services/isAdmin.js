import decodeToken from '@/services/decode'
import http from '@/services/http'

export default function(){
    let userToken = localStorage.getItem('token');
    let decoded = decodeToken(userToken);

    http().get(`/user/${decoded.userId}`)
    .then((response) => {
        let admin = response.data[0].user_admin;
        if(admin == 1) {
            return true;
        }
        if(admin == 0) {
            return false;
        }
    })
    .catch(error => console.log(error));
}
