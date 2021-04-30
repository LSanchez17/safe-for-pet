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

    static async sendVoiceLog(voiceData){
        try{
            await axios.post(`${URL}/logs/voice`, { voiceLog: voiceData });
            
            return;
        }
        catch(e){
            let message = e.response.data.error.message;
            throw [message];
        }
    }

    static async getVoiceLogs(){
        try{
            let res = await axios.get(`${URL}/logs`);

            return res.data;
        }
        catch(e){
            let message = e.response.data.error.message;
            throw [message];
        }
    }

    static async getTotalVisitors(){
        try{
            let res = await axios.get(`${URL}/logs/users`);

            return res.data;
        }
        catch(e){
            let message = e.response.data.error.message;
            throw [message];
        }
    }

    static async dashBoard(){
        try{
            let voices = await this.getVoiceLogs();
            let foods = await this.getAllToxicFoods();
            let visitors = await this.getTotalVisitors(); 

            return {voices, foods, visitors};
        }
        catch(e){
            let message = `API needs attention, call Luis with this ${e}`;
            throw [message];
        }
    }
}

export default AnimalApi;