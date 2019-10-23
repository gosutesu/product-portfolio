import React, {FunctionComponent} from 'react';
import css from 'styled-jsx/css';
import {FoxMoving} from "../../atoms/icons/foxMoving";
import {AccentFont} from "../../atoms/fonts/accentFont";

export const HeaderTitle: FunctionComponent = () => {
  return (
      <div className='header-title'>
        <div className='header-title-icon'>
          <FoxMoving/>
        </div>
        <div className='header-title-font'>
          <AccentFont text="きつねの十字路"/>
        </div>
        <style jsx>{style}</style>
      </div>
  );
}

const style = css`
  .header-title {
    display : flex;
    align-items: center;
  }
  .header-title-icon {
    width: 58px;
    height: 58px;
    margin: 6px 13px 0px 8px;
  }
  @media screen and (max-width: 480px) { 
    .header-title {
      height: 46px;
    }
    .header-title-icon {
      display: none;
    }
  }
`;
