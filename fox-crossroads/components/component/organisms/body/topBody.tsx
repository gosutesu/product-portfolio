import React, {FunctionComponent} from 'react';
import css from 'styled-jsx/css';
import {HeaderTitle} from "../../molecules/titles/headerTitle";
import {SummaryProfile} from "../../molecules/profiles/summaryProfile";
import {RoundedLink} from "../../atoms/links/roundedLink";

export const TopBody: FunctionComponent = () => {
  return (
      <div className="body">
        <div>
          <SummaryProfile />
        </div>
        <div className="link">
          <RoundedLink file={"/static/pdf/history.pdf"} text={"職務経歴書を見る"}/>
        </div>
        <style jsx>{style}</style>
      </div>
  );
}

const style = css`
  .body {
    height: calc(100vh - 74px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--light-color);
  }
  .link {
    width: 320px;
    margin-top: 20px;
  }
`;