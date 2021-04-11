import React from 'react';

const Answer = ({food, poisonous, reference}) => {
    let poisonousToText = poisonous ? 'toxic to your pet' : 'not toxic to your pet';

    return (
        <div className='alert alert-info rounded text-center card shadow mx-auto'>
            {food ?  <div>
                        <h3>The food you searched for is: <span><p className='font-italic'>{food}.</p></span>
                            It is {poisonousToText}.  Here is our references:<a className='nav-link active' href={reference}>link to reference</a>
                        </h3> 
                     </div> : ''}
        </div>
    );
}

export default Answer;