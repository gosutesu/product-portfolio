import React, {FunctionComponent} from 'react';
import css from 'styled-jsx/css';
import {string} from "prop-types";

interface Props {
  file: string,
  text: string,
}

export const RoundedLink: FunctionComponent<Props> = (props) => {
  return (
      <a href={props.file} target="_blank" className="href">
        <div className="link">
          {props.text}
        </div>
        <style jsx>{style}</style>
      </a>
  );
}

const style = css`
  .link {
    height: 40px;
    border: 1px solid var(--main-color);
    border-radius: 10px 10px 10px 10px;
    background-color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .link:hover {
    border-color: var(--dark-color);
    background-color: var(--dark-color);    
    box-shadow: 0px 0px 10px var(--dark-color);
  }
  .href {
    font-family: 'Kosugi Maru', sans-serif;
    font-size: 16px;
    color: var(--light-font-color);
    text-decoration: none;
  }
`;