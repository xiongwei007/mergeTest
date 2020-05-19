import React, { Component } from 'react';
import styles from './index.less'
class Head extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <div className={styles['head']}>
                <div className={styles['head-logo']}>
                    {/* <img src='../../'/> */}
                </div>
                <div className={styles['head-nav']}>
                    <div>首页</div>
                    <div>产品介绍</div>
                    <div>关于我们</div>
                    <div>联系我们</div>
                </div>
            </div>
        )
    }
}
export default Head;