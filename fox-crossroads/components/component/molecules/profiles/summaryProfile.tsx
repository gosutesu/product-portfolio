import React, {FunctionComponent} from 'react';
import css from 'styled-jsx/css';
import {SentenceFont} from "../../atoms/fonts/sentenceFont";
import {FoxSleeping} from "../../atoms/icons/foxSleeping";
import {FoxJumping} from "../../atoms/icons/foxJumping";

export const SummaryProfile: FunctionComponent = () => {
  return (
      <div className="profile">
        <div className="sleeping">
          <FoxSleeping/>
        </div>
        <div className="sentence">
          <div className="sentence-part">
            <SentenceFont text={"経歴４年。"}/>
          </div>
          <div className="sentence-part">
            <SentenceFont text={"サーバーサイド。"}/>
          </div>
          <div className="sentence-part">
            <SentenceFont text={"Java/C。"}/>
          </div>
          <div className="sentence-part">
            <SentenceFont text={"要件定義/設計/テスト。"}/>
          </div>
          <div className="sentence-part">
            <SentenceFont text={"型のある言語が好き。"}/>
          </div>
        </div>
        <div className="jumping">
          <FoxJumping/>
        </div>
        <style jsx>{style}</style>
      </div>
  );
};

const style = css`
  .profile {
    display: flex;
    color: var(--main-font-color);
  }
  .sleeping {
    width: 160px;
  }
  .sentence {
    padding: 60px 10px 80px 10px;
  }
  .sentence-part {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .jumping {
    width: 160px;
    align-self: flex-end; 
  }
  @media screen and (max-width: 480px) { 
    .sleeping {
      display: none;
    }
    .jumping {
      display: none;
    }
  }

`;