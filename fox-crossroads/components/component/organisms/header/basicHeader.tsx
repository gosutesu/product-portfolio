import React, {FunctionComponent} from 'react';
import css from 'styled-jsx/css';
import {HeaderTitle} from "../../molecules/titles/headerTitle";

export const BasicHeader: FunctionComponent = () => {
  return (
      <header className="header">
        <div>
          <HeaderTitle/>
        </div>
        <style jsx>{style}</style>
      </header>
  );
}

const style = css`
  header {
    display: flex;
    padding: 7px;
    background-color: var(--main-color);
    color: var(--light-font-color);
  }
`;