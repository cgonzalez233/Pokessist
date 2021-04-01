import axios from "axios";

const userController = {
    getUser: function () {
        return axios.get(`/api/users/me`);
    },
    getTypes: function () {
        return axios.get("https://pokeapi.co/api/v2/type/");
    },
    getTypeinfo: function (index) {
        return axios.get(`https://pokeapi.co/api/v2/type/${index}`);
    },
};

export default userController;
