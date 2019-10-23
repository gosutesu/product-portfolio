import React, {FunctionComponent} from 'react';
import css from 'styled-jsx/css';

interface Props {
  text: String,
}

/**
 * 強調文字
 */
export const AccentFont: FunctionComponent<Props> = (props) => {
  return (
      <p>
        {props.text}
        <style jsx>{style}</style>
      </p>
  );
};


const style = css`
  p {
    margin: 0px;
    font-family: 'Kosugi Maru', sans-serif;
    font-size: 200%;
  }
  @media screen and (max-width: 480px) { 
    p {
      font-size: 100%;
    }
  }
`;
