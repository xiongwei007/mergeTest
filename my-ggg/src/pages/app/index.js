import React from 'react';
import { Layout } from 'antd';
import Head from '../../components/head'
// import Banner from '../../components/banner'
const { Header, Footer, Content } = Layout;
class App extends React.Component{
    render(){
        return(
            <Layout>
                <Header>
                    <Head/>
                </Header>
                <Content>
                    {/* <Banner/> */}
                </Content>
                <Footer>foot</Footer>
            </Layout>   
        )
    }
}
export default App;