import React, {FunctionComponent} from 'react';
import css from "styled-jsx/css";

export const Menu: FunctionComponent = () => {
  return (
      <div>
        <img src="/static/img/icons/hamburger.png" />
        <style jsx>{style}</style>
      </div>
  );
}

const style = css`
  img {
    width : 100%;
    height : 100%;
  }
`;