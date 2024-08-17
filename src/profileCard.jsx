import React from "react";
import './profileCard.css';

const ProfileCard = () => {
    return (
        <div className="card">
            <div className="card-border-top"></div>
            <img className="img" src={`avatar.jpg`} alt="Avatar" />
            <span>Ec3o</span>
            <p className="job">见习CTFer</p>
            <button>Edit Profile</button>
        </div>
    );
}

export default ProfileCard;
