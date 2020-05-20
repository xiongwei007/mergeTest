import React, { Component } from 'react';
import styles from './index.less'
class Banner extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <div className={styles['banner']}>
                <div className={styles['banner-play']}></div>
                <div className={styles['banner-shade']}>
                    <div className={styles['banner-shade-content']}>
                        <div className={styles['banner-shade-content-left']}>
                            <h1><span>勾勾</span><span>教学</span></h1>
                            <p>“勾勾教学”是基于精品智能题库，利用智能笔答题，采集学生作答数据，经过大数据算法分析，精准挖掘出学生学习的薄弱点，“勾勾教学”根据学生的薄弱点提供专项训练，帮助学生快速提高学习成绩。</p>
                            <div className={styles['qr-code-download']}>
                                <div className={styles['qr-code-download-ios']}>
                                    <div className={styles['qr-code-download-ios-img']}></div>
                                    <div className={styles['qr-code-download-ios-btn']}>ios版本</div>
                                </div>
                                <div className={styles['qr-code-download-ad']}>
                                    <div className={styles['qr-code-download-ad-img']}></div>
                                    <div className={styles['qr-code-download-ad-btn']}>安卓版本</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['banner-shade-content-right']}></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Banner;