import axios from 'axios';

const URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3001';

class AnimalApi {
    //connects to API endpoints

    static async getAllToxicFoods(){
        try{
            let res = await axios.get(`${URL}/dogs`);
            return res.data;
        }
        catch(e){
            let message = e.response.data.error.message;
            throw [message];
        }
    }

    static async getSpecificFood(searchTerm){
        try{
            let food = searchTerm.foodItem;
            let res = await axios.get(`${URL}/dogs/${food}`);
            return res.data;
        }
        catch(e){
            let message = e.response.data.error.message;
            throw [message];
        }
    }
}

export default AnimalApi;