import React, {FunctionComponent} from 'react';
import css from 'styled-jsx/css';
import {HeaderTitle} from "../../molecules/titles/headerTitle";

export const BasicHeader: FunctionComponent = () => {
  return (
      <div className="header">
        <div>
          <HeaderTitle/>
        </div>
        <div className="menu">
        </div>
        <style jsx>{style}</style>
      </div>
  );
}

const style = css`
  .header {
    display: flex;
    padding: 7px;
    background-color: var(--main-color);
    color: var(--light-font-color);
  }
  .menu {
    width: 60px;
    height: 60px;
    margin-left: auto;
  }
`;