import React from 'react';
import './Card.css';

const Card = (props) => {
  const { firstname, lastname, title, picture, email, age, phone } = props.user;
  const { large } = picture;
  return (
    <div className="user-card">
      <div>
        <img className="user-image" src={large} />
      </div>
      <h2 className="name">
        {title} {firstname} {lastname}
      </h2>
      <div className="user-details">
        <div>{email}</div>
        <div>Age: {age}</div>
        <div>Phone: {phone}</div>
      </div>
    </div>
  );
}

export default Card;
