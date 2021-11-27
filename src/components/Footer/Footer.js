import React from "react";
import * as S from "./Styled.js";

const Footer = () => {
  return (
    <S.Footer>
      <S.ContainerFooter>
        <S.TextFooter>
          Criado e desenvoldido por{" "}
          <S.NavLink
            to={{ pathname: "https://github.com/arthursaldanha" }}
            target="_blank"
          >
            Arthur Saldanha
          </S.NavLink>
          .
        </S.TextFooter>
      </S.ContainerFooter>
    </S.Footer>
  );
};

export default Footer;
