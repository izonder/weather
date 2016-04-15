// imports Style
import Style from './style.pcss';

// imports Base
import React from 'react';

export default class Item extends React.Component {
    render() {
        let {temperature, weather, date} = this.props;
        return(
            <div>
                <div>T: {temperature}</div>
                <div>W: {weather}</div>
                <div>D: {date}</div>
            </div>
        );
    }

}