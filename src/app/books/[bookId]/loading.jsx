import React from 'react';

const BookLoading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div>
                <h2>Loading Book Details...</h2>
                <span className="loading loading-spinner loading-xl w-30"></span>
            </div>
        </div>
    );
};

export default BookLoading;