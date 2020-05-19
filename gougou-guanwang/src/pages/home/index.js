import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import Head from '../../components/head'
const { Header, Footer, Content } = Layout;
// import styles from './IndexPage.css';

function Home() {
  return (
    <Layout>
        <Header>
            <Head/>
        </Header>
        <Content>ddd</Content>
        <Footer>ddd</Footer>
    </Layout>
  );
}

Home.propTypes = {
};

export default connect()(Home);