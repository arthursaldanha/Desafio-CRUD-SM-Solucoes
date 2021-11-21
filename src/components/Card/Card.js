import React from "react";
import { GoPencil } from "react-icons/go"
import { Link } from "react-router-dom";

// Styles
import "./Card.css";

const Card = ({ id, email, firstName, lastName, avatar, alt }) => {
  return (
    <div className="container-card">
      <div className="image-card">
        <img src={avatar} alt={alt}/>
      </div>
      <div className="name-card">
        <h2>{`${firstName} ${lastName}`}</h2>
      </div>
      <div className="email-card">
        <span>{email}</span>
      </div>
      <div className="edit-pencil-card">
        <Link to={`/atualizar-cliente/${id}`}>
          <GoPencil />
        </Link>
      </div>
    </div>
  );
};

export default Card;
