import React, {FunctionComponent} from 'react';
import Head from 'next/head';

/**
 * 各ページの<head>を設定するコンポーネント
 */
export const CustomHead: FunctionComponent = () => {
  return (
      <div>
        <Head>
          <title>fox crossroad</title>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          // font setting
          <link href="https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap"
                rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c&display=swap"
                rel="stylesheet"/>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
      </div>
  );
}