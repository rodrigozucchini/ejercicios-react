import APIRequest from "../ejercicios-19-20-21/chuckNorris";


export default function getRandomUser() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500;
        }
    }); // DEVUELVE LA RESPUESTA DEL https://randomuser.me/api
}