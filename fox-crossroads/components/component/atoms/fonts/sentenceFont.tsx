import React, {FunctionComponent} from 'react';
import css from 'styled-jsx/css';

interface Props {
  text: String,
}

/**
 * 強調文字
 */
export const SentenceFont: FunctionComponent<Props> = (props) => {
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
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-size: 18px;
  }
`;
