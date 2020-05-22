import React, { Component } from 'react';
import { Menu } from 'antd';
import styles from './index.less'
import anchorLink from '../../utils/anchorLink'
class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // item:['home','introduce','aboutUs','mapcontainer'],
            itemColors: {
                'home': '#474646',
                'introduce': '#474646',
                'aboutUs': '#474646',
                'map': '#474646'
            },
            itemColor: {
                'home': '#2D69C3',
                'introduce': '#474646',
                'aboutUs': '#474646',
                'map': '#474646'
            }
        }
    }
    componentDidMount() {
        // let items=['home','introduce','aboutUs','mapcontainer'];
        // let home=document.getElementById('home').offsetTop;
        let introduce = document.getElementById('introduce').offsetTop;
        let aboutUs = document.getElementById('aboutUs').offsetTop;
        let map = document.getElementById('map').offsetTop;
        window.onscroll = () => {
            //变量t是滚动条滚动时，距离顶部的距离
            let t = document.documentElement.scrollTop || document.body.scrollTop;
            if (t > 0 && t < 20) {
                // arr['home']='#2D69C3'
                this.setState({
                    itemColor: {
                        'home': '#2D69C3',
                        'introduce': '#474646',
                        'aboutUs': '#474646',
                        'map': '#474646'
                    }
                })
            }
            if (t > 20 && t < (introduce + 200)) {
                // arr['introduce']='#2D69C3'
                this.setState({
                    itemColor: {
                        'home': '#474646',
                        'introduce': '#2D69C3',
                        'aboutUs': '#474646',
                        'map': '#474646'
                    }
                })
            }
            if (t > (introduce + 200) && t < (aboutUs + 200)) {
                // arr['aboutUs']='#2D69C3'
                this.setState({
                    itemColor: {
                        'home': '#474646',
                        'introduce': '#474646',
                        'aboutUs': '#2D69C3',
                        'map': '#474646'
                    }
                })
            }
            if (t > (aboutUs + 200) && t < (map + 200)) {
                // arr['mapcontainer']='#2D69C3'
                this.setState({
                    itemColor: {
                        'home': '#474646',
                        'introduce': '#474646',
                        'aboutUs': '#474646',
                        'map': '#2D69C3'
                    }
                })
            }

        }
    }
    handleMenu = (event) => {
        console.log(event)
        let key = event.key;
        let arr = {
            'home': '#474646',
            'introduce': '#474646',
            'aboutUs': '#474646',
            'map': '#474646'
        };
        arr[key] = '#2D69C3';
        this.setState({
            itemColor: arr
        })
        anchorLink(key);
    }
    render() {
        return (
            <div className={styles['head']} id='home'>
                <div className={styles['head-content']}>
                    <div className={styles['head-logo']}>
                        {/* <img src='../../'/> */}
                    </div>
                    <Menu className={styles['head-nav']} onClick={this.handleMenu}>
                        <Menu.Item key='home' style={{ color: this.state.itemColor.home }}>首页</Menu.Item>
                        <Menu.Item key='introduce' style={{ color: this.state.itemColor.introduce }}>产品介绍</Menu.Item>
                        <Menu.Item key='aboutUs' style={{ color: this.state.itemColor.aboutUs }}>关于我们</Menu.Item>
                        <Menu.Item key='map' style={{ color: this.state.itemColor.map }}>联系我们</Menu.Item>
                    </Menu>
                </div>
            </div>
            // <div className={styles['head']}>
            //     <div className={styles['head-logo']}>
            //         {/* <img src='../../'/> */}
            //     </div>
            //     <div className={styles['head-nav']}>
            //         <div>首页</div>
            //         <div>产品介绍</div>
            //         <div>关于我们</div>
            //         <div>联系我们</div>
            //     </div>
            // </div>
        )
    }
}
export default Head;