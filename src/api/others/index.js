import axiosClient from "../axiosClient";


class OtherApi {
    getAll = (param) => {
        return axiosClient.get('/others', { param });
    }
}

const otherApi = new OtherApi();
export default otherApi;