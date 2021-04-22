import React, { useEffect, useState } from 'react';
import Voices from './Voices';
import Foods from './Foods';
import AnimalApi from '../helpers/apiCommunication';

const Dashboard = () => {
    //Data manipulation and displaying it fancyfully
    const [voiceData, setVoiceData] = useState([]);
    const [foodData, setFoodData] = useState([]);

    useEffect( () => {
        const fetchVoiceData = async () => {
            //call api, get voice data for analysis
            let voices = await AnimalApi.getVoiceLogs();

            setVoiceData(voices);
        };

        fetchVoiceData();
    }, []);

    useEffect(() => {
        const fetchFoodData = async () => {
            let foods = await AnimalApi.getAllToxicFoods();

            setFoodData(foods);
        };

        fetchFoodData();
    }, []);


    return (
        <div className='Dashboard container-fluid height-full my-2'>
            <div className='jumbotron bg-white shadow p-1 my-2'>
                <h2 className='text-center'>Voice data from users queries</h2>
                <Voices voices={voiceData} />
            </div>
            <div className='jumbotron bg-white shadow p-1 my-2 '>
                <h2 className='text-center'>All toxic foods for dogs</h2>
                <Foods foods={foodData} />
            </div>
        </div>
    )
};

export default Dashboard;