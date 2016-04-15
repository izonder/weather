// imports Style
import Style from './style.pcss';

// imports Base
import React from 'react';

export default class Search extends React.Component {
    clickFetchButton() {
        let {clickHandler} = this.props,
            value = this.refs.search.value;

        clickHandler(value);
    }

    render() {
        return(
            <div>
                <input type="text" ref="search" />
                <button onClick={() => this.clickFetchButton()}>Fetch forecast</button>
            </div>
        );
    }

}