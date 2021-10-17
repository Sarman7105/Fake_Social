import React from 'react';
import './BirthdayContainer.scss';

const BirthdayContainer = () => {
    return (
        <div className="birthday">
            <img className="birthdayImage" src="/Assets/gift.png" alt="" />
            <span className="birthdayText"> <b>Akif</b> and <b>3 others friends</b>  has birthday today</span>
        </div>
    );
};

export default BirthdayContainer;