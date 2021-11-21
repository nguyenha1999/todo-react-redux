import axiosClient from "../axiosClient";


class WordApi {
    getAll = (param) => {
        return axiosClient.get('/works', { param });
    }
}

const wordApi = new WordApi();
export default wordApi;