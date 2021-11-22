import React, { useState, useEffect } from "react";
import axios from "axios";

// Styles
import "./ListUsers.css";

// Components
import { Card, Loading } from "../index";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setUsers(response.data.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className="content-list-users">
      <div className="container-list-users">
        {loading && <Loading />}
        <div className="wrapper-cards">
          {users.map(({ id, email, first_name, last_name, avatar }) => {
            return (
              <Card
                key={id}
                id={id}
                email={email}
                firstName={first_name}
                lastName={last_name}
                avatar={avatar}
                alt={`cliente ${id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListUsers;
