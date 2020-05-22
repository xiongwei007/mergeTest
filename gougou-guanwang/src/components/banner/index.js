import React, { Component } from 'react';
import styles from './index.less'
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iosCode: false,
            adCode: false
        }
    }
    codeShow = (event) => {
        let value = event.target.innerHTML;

        if (value === 'ios版本') {
            this.setState({
                iosCode: true
            })
        }
        if (value === '安卓版本') {
            this.setState({
                adCode: true
            })
        }
    }
    codeHidden = (event) => {
        let value = event.target.innerHTML;
        if (value === 'ios版本') {
            this.setState({
                iosCode: false
            })
        }
        if (value === '安卓版本') {
            this.setState({
                adCode: false
            })
        }
    }
    render() {
        return (
            <div className={styles['banner']} id='introduce'>
                <div className={styles['banner-play']}>
                    <img src='\src\img\banner.png' alt='banner'></img>
                </div>
                <div className={styles['banner-shade']}>
                    <div className={styles['banner-shade-content']}>
                        <div className={styles['banner-shade-content-left']}>
                            <h1><span>勾勾</span><span>教学</span></h1>
                            <p>“勾勾教学”是基于精品智能题库，利用智能笔答题，采集学生作答数据，经过大数据算法分析，精准挖掘出学生学习的薄弱点，“勾勾教学”根据学生的薄弱点提供专项训练，帮助学生快速提高学习成绩。</p>
                            <div className={styles['qr-code-download']}>
                                <div className={styles['qr-code-download-ios']}>
                                    <div className={styles['qr-code-download-ios-img']}>
                                        {this.state.iosCode ? <img src='\src\img\we1.png' alt='二维码下载'></img> : null}
                                    </div>
                                    <div className={styles['qr-code-download-ios-btn']} onMouseMove={this.codeShow} onMouseOut={this.codeHidden}>ios版本</div>
                                </div>
                                <div className={styles['qr-code-download-ad']}>
                                    <div className={styles['qr-code-download-ad-img']} id='andrImg'>
                                        {this.state.adCode ? <img src='\src\img\we1.png' alt='二维码下载'></img> : null}
                                    </div>
                                    <div className={styles['qr-code-download-ad-btn']} onMouseMove={this.codeShow} onMouseOut={this.codeHidden}>安卓版本</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles['banner-shade-content-right']}>
                            <img src='\src\img\iPhone64.7.png' alt='phone'></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Banner;