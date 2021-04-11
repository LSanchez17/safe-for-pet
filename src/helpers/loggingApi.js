import axios from 'axios';

const URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

class loggingApi {
    static async logVisit() {
        try{
            let res = await axios.post(`${URL}/logs`);

            return res.data;
        }
        catch(e){
            return ({message: 'Something went wrong on our end'});
        }
    }
}

export default loggingApi;