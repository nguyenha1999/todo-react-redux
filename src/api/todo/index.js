import axiosClient from "../axiosClient";


class TodoApi {
    getAll = (param) => {
        return axiosClient.get('/homes', { param });
    }
}

const todoApi = new TodoApi();
export default todoApi;