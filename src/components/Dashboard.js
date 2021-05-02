import React, { useEffect, useState } from 'react';
import Voices from './Voices';
import Foods from './Foods';
import AnimalApi from '../helpers/apiCommunication';

const Dashboard = () => {
    //Data manipulation and displaying it fancyfully
    const [voiceData, setVoiceData] = useState([]);
    const [foodData, setFoodData] = useState([]);
    const [visitors, setVisitors] = useState(0);
    let loaded = 0;

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

    loaded = visitors;

    return (
        <div>
            {
            loaded > 0 ?
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
            :
            <div className='h-100 my-auto text-center'>
                <div class='spinner-grow text-primary' role='status'>
                    <span class='sr-only'><h3>Loading</h3></span>
                </div>
            </div>
            }
        </div>
    )
};

export default Dashboard;