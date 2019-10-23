import React, {FunctionComponent} from 'react';
import css from 'styled-jsx/css';
import {HeaderTitle} from "../../molecules/titles/headerTitle";
import {SummaryProfile} from "../../molecules/profiles/summaryProfile";
import {RoundedLink} from "../../atoms/links/roundedLink";

export const TopBody: FunctionComponent = () => {
  return (
      <main>
        <div className="profile">
          <SummaryProfile />
        </div>
        <div className="link">
          <RoundedLink file={"/static/pdf/history.pdf"} text={"職務経歴書を見る"}/>
        </div>
        <style jsx>{style}</style>
      </main>
  );
}

const style = css`
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .profile {
    margin-top: 120px;
  }
  .link {
    width: 320px;
    margin-top: 20px;
  }
`;