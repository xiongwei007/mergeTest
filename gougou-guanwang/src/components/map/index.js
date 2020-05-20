import React, { Component } from 'react';
import styles from './index.less';
class Map extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return (
            <div className={styles['map']} id='mapcontainer'>
            </div>
        )
    }
}
export default Map;