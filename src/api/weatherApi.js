import axiosClient from "./axiosClient";

const weatherApi = {
    getCurrentWeather(location){
        const url = `weather?appid=ab32d8ddac683403f98631c8699b08cc&q=${location}`;
        return axiosClient.get(url)
    }
}

export default weatherApi