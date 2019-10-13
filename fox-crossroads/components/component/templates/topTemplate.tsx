import React, {FunctionComponent} from 'react';
import {BasicHeader} from "../organisms/header/basicHeader";
import {TopBody} from "../organisms/body/topBody";

export const TopTemplate : FunctionComponent = () => {
  return (
      <div>
        <BasicHeader />
        <TopBody />
      </div>
  );
}