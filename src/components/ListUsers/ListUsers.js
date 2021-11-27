import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Styles
import * as S from './Styled.js';

// Components
import { Card, Loading } from '../index';

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <S.ListUsers>
      <S.ContainerListUsers>
        {loading && <Loading />}
        <S.ContainerCards>
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
        </S.ContainerCards>
      </S.ContainerListUsers>
    </S.ListUsers>
  );
};

export default ListUsers;
