import React from 'react';
import {TopTemplate} from "../components/component/templates/topTemplate";
import {CustomHead} from "../components/component/organisms/head/head";

const TopPage = () => {
  return (
      <div>
        <CustomHead/>
        <TopTemplate/>
        <style jsx global>{`
          :root {
            --main-color: #008D56;
            --light-color: #F2FAF8;
            --dark-color: #005e2c;
            --light-font-color: #F2FAF8;
            --main-font-color: #008D56;
          }
          body { 
            margin : 0px;
            padding : 0px;
          }
        `}</style>

      </div>
  );
}

export default TopPage;