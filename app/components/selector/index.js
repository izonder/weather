// imports Style
import Style from './style.pcss';

// imports Base
import React from 'react';

export default class Selector extends React.Component {
    componentDidMount() {
        this.changeHandler();
    }

    renderOptions() {
        let {options} = this.props;
        return options.map((item) => {
            return (
                <option key={item.code} value={item.code}>{item.title}</option>
            )
        })
    }

    changeHandler() {
        let {changeHandler} = this.props,
            selected = this.refs.selector.value;

        changeHandler(selected);
    }

    render() {
        return(
            <div>
                <select onChange={this.changeHandler.bind(this)} ref="selector">
                    {this.renderOptions()}
                </select>
            </div>
        );
    }

}