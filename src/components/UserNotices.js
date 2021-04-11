import React from 'react';

const userNotices =({warnings}) => {
    // console.log(warnings);
    return (
        <>
            {
            warnings != null ?  
            <div className='alert alert-danger rounded bg-white shadow text-center m-0'>
                <h3>{warnings[0]}</h3>
            </div> 
            : 
            ''
            }
        </>
    )
};

export default userNotices;