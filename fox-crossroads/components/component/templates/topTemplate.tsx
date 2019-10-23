import React, {FunctionComponent} from 'react';
import css from 'styled-jsx/css';
import {BasicHeader} from "../organisms/header/basicHeader";
import {TopBody} from "../organisms/body/topBody";

export const TopTemplate : FunctionComponent = () => {
  return (
      <div className="top">
        <BasicHeader />
        <TopBody />
        <style jsx>{style}</style>
      </div>
  );
}

const style = css`
  .top {
    height: 100vh;
    background-color: var(--light-color);
  }
`;