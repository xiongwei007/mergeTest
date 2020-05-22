import React, { Component } from 'react';
import styles from './index.less';
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={styles['map']} id='map'>
                <div className={styles['map-map']} id='mapcontainer'></div>
                <h1>contact us</h1>
                <h2>联系我们</h2>
                <div className={styles['contactUs']}>
                    <div className={styles['contactUs-address']}><div className={styles['contactUs-address-icon']}></div><p>贵州省贵阳市花溪区贵安数据经济产业园</p></div>
                    <div className={styles['contactUs-address']}><div className={styles['contactUs-phone-icon']}></div><p>+01 2345 67 89</p></div>
                    <div className={styles['contactUs-address']}><div className={styles['contactUs-url-icon']}></div><p>support@company.com</p></div>
                </div>
            </div>
        )
    }
}
export default Map;