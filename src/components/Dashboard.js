import React, { useEffect, useState } from 'react';
import Voices from './Voices';
import Foods from './Foods';
import AnimalApi from '../helpers/apiCommunication';

const Dashboard = () => {
    //Data manipulation and displaying it fancyfully
    const [voiceData, setVoiceData] = useState([]);
    const [foodData, setFoodData] = useState([]);
    const [visitors, setVisitors] = useState(null);

    // useEffect( () => {
    //     const fetchVoiceData = async () => {
    //         //call api, get voice data for analysis
    //         let voices = await AnimalApi.getVoiceLogs();

    //         setVoiceData(voices);
    //     };

    //     fetchVoiceData();
    // }, []);

    // useEffect(() => {
    //     const fetchFoodData = async () => {
    //         let foods = await AnimalApi.getAllToxicFoods();

    //         setFoodData(foods);
    //     };

    //     fetchFoodData();
    // }, []);

    useEffect( () => {
        const fetchMyApi = async () => {
            let returnedData = await AnimalApi.dashBoard();
            //watch your returned data to avoid inner nesting!
            let numberVisits = returnedData.visitors.totalVisits.totalvisits;

            setVoiceData(returnedData.voices);
            setFoodData(returnedData.foods);
            setVisitors(parseInt(numberVisits));
        };

        fetchMyApi();
    }, [])


    return (
        <div className='Dashboard container-fluid height-full my-2'>
            <h3 className='jumbotron bg-white shadow p-1 my-2'>We've had {visitors} visitors so far!</h3>
            <div className='jumbotron bg-white shadow p-1 my-2'>
                <h4 className='text-center'>Voice data from users queries</h4>
                <Voices voices={voiceData} />
            </div>
            <div className='jumbotron bg-white shadow p-1 my-2 '>
                <h4 className='text-center'>All toxic foods for dogs</h4>
                <Foods foods={foodData} />
            </div>
        </div>
    )
};

export default Dashboard;