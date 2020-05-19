import React, { Component } from 'react';
import { Menu } from 'antd';
import './index.css'
class Head extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    handleNavClick(e){
        console.log(e);
    }
    render(){
        return (
            <div className='head'>
                <div className='head-logo'>
                    {/* <img src='../../'/> */}
                </div>
                <Menu  className='head-nav'
                onClick={this.handleNavClick}
                >
                    <Menu.Item key="home"  className='head-nav-item'>首页</Menu.Item>
                    <Menu.Item key="productPresentation" className='head-nav-item'>产品介绍</Menu.Item>
                    <Menu.Item key="aboutUs" className='head-nav-item'>关于我们</Menu.Item>
                    <Menu.Item key="contactUs" className='head-nav-item'>联系我们</Menu.Item>
                </Menu>
                {/* <div className={styles['head-nav']}>
                    <div onClick={this.handleNav}>首页</div>
                    <div onClick={this.handleNav}>产品介绍</div>
                    <div onClick={this.handleNav}>关于我们</div>
                    <div onClick={this.handleNav}>联系我们</div>
                </div> */}
            </div>
        )
    }
}
export default Head;