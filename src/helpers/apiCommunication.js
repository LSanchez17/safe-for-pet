import axios from 'axios';

const URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

class AnimalApi {
    //connects to the API itself with needed data/parameters
    static async request(accessPoint, data={}, method='get'){
        console.log(`API:${accessPoint}, data:${data}, method:${method}`);

        const endPoint = `${URL}/${accessPoint}`;
        const params = (method === 'get') ? data : {};

        try{
            return (await axios({endPoint, method, data, params}));
        }
        catch(e){
            console.error('Connection misfire', e.respone);
            let message = e.respponse.data.error.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    static async getAllToxicFoods(){
        let res = await this.request('dogs');
        return res.foods;
    }

    static async getSpecificFood(searchTerms){
        let res = await this.request('dogs', searchTerms);
        return res.answer;
    }
}

export default AnimalApi;