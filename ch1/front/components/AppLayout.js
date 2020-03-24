import React from 'react';
import { Menu, Input, Button } from 'antd';
import Head from 'next/head';
import Link from 'next/link';

const AppLayOut = ( {children} ) => {
  return(
    <div>
      <Head>
        <title>nodebird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.4/antd.css" />
      </Head>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="signup"><Link href="/signup"><a>회원가입</a></Link></Menu.Item>
        <Menu.Item key='mail'>
          <Input.Search enterButton style={{ verticalAlign: 'middle'}} />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  )
};

export default AppLayOut;
