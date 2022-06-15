import axios from 'axios';

export const userAPI = {
    async createUser(data = {}) {
        try {
          var res = await axios.post("/api/login", data);
        } catch (err) {
            console.error(err)
        }
        return res;
    }
}