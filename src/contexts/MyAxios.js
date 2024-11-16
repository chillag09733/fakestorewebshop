import axios from "axios";

//saját axios példány létrehozása és configurálása

export const MyAxios = axios.create({
    baseURL: 'https://fakestoreapi.com'
})