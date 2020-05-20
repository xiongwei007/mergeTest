import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd';
import Head from '../../components/head';
import Banner from '../../components/banner';
import Particulars from '../../components/particulars';
import Map from '../../components/map';
import styles from './index.less';
const { Header, Footer, Content } = Layout;
function Home() {
  return (
    <Layout>
        <Header>
            <Head/>
        </Header>
        <Content>
            <Banner/>
            <Particulars/>
            <Map/>
        </Content>
        <Footer className={styles['footer']}>

        </Footer>
    </Layout>
  );
}

Home.propTypes = {
};

export default connect()(Home);