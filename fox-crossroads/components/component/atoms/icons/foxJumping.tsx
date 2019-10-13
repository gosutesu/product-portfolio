import React, {FunctionComponent} from 'react';
import css from 'styled-jsx/css';

/**
 * 躍動感のある狐のアイコン部品
 */
export const FoxJumping: FunctionComponent = () => {
  return (
      <div>
        <img src="/static/img/foxes/fox-jumping.png" />
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