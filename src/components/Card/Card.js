import React from 'react';

// Style
import * as S from './Styled.js';

const Card = ({ id, email, firstName, lastName, avatar, alt }) => {
  return (
    <S.ContainerCard>
      <S.ImageCard>
        <S.Image src={avatar} alt={alt} />
      </S.ImageCard>
      <S.NameCard>
        <S.Name>{`${firstName} ${lastName}`}</S.Name>
      </S.NameCard>
      <S.EmailCard>
        <S.Email>{email}</S.Email>
      </S.EmailCard>
      <S.EditPencilCard>
        <S.NavLink to={`/atualizar-cliente/${id}`}>
          <S.Pencil />
        </S.NavLink>
      </S.EditPencilCard>
    </S.ContainerCard>
  );
};

export default Card;
