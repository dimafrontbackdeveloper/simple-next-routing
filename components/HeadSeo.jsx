import React from 'react';
import Head from 'next/head';

const HeadSeo = ({ children, title, content }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={content} key="title" />
      </Head>
      {children}
    </>
  );
};

export default HeadSeo;
