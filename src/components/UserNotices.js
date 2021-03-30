import React from 'react';

const userNotices =({warnings}) => {
    return (
        <>
            {
            warnings ? 
            warnings.map((item, idx) => 
                <div key={idx} className='alert alert-danger rounded bg-white shadow text-center m-0'><h3>{item}</h3></div>) 
            : 
            ''
            }
        </>
    )
};

export default userNotices;