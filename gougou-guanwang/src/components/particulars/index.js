import React, { Component } from 'react';
import styles from './index.less';
class Particulars extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={styles['particulars']} id='aboutUs'>
                <div className={styles['particulars-1']}>

                    <div className={styles['particulars-1-content']}>
                        <div className={styles['particulars-1-content-main']}>
                            <h1><span>about</span><span> us</span></h1>
                            <h2>树精英</h2>
                            <p>是一家专门运用大数据、大系统平台做高考志愿评估服务的公司</p>
                        </div>
                        <div className={styles['particulars-1-content-line']}></div>
                    </div>
                </div>
                <div className={styles['particulars-2']}>
                    <img src='\src\img\we1.png' alt='we1.png'></img>
                    <div className={styles['shade']}></div>
                </div>
                <div className={styles['particulars-3']}>
                    <div className={styles['particulars-1-content']}>
                        <div className={styles['particulars-1-content-main']}>
                            <h1>idea</h1>
                            <h2>核心理念</h2>
                            <p>以专注、专业、专心为核心理念</p>
                        </div>
                        <div className={styles['particulars-1-content-line']}></div>
                    </div>
                </div>
                <div className={styles['particulars-4']}>
                    <img src='\src\img\we2.png' alt='we2.png'></img>
                    <div className={styles['shade']}></div>
                </div>
                <div className={styles['particulars-5']}>
                    <div className={styles['particulars-1-content']}>
                        <div className={styles['particulars-1-content-main']}>
                            <h1>address</h1>
                            <h2>所在地</h2>
                            <p>司总部设在贵州，在全国主要省市（北京、杭州）设立分公司</p>
                        </div>
                        <div className={styles['particulars-1-content-line-3']}></div>
                    </div>
                </div>
                <div className={styles['particulars-6']}>
                    <img src='\src\img\we3.png' alt='we3.png'></img>
                    <div className={styles['shade']}></div>
                </div>
            </div>
        )
    }
}
export default Particulars;