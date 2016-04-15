import Style from './style.pcss';

import React from 'react';
import { connect } from 'react-redux';
import Container from 'core/container';

import Selector from 'component/selector';
import Search from 'component/search';
import Item from 'component/item';

import indexActions from './actions';

class Index extends React.Component {
    static select(state) {
        return {
            state: state.app
        };
    }

    constructor() {
        super();

        this.config = Container.get('config');
    }

    clickFetchButton(value)
    {
        let {state} = this.props;
        indexActions.fetchAction(state.vendor, value);
    }

    changeVendorSelector(value)
    {
        indexActions.vendorAction(value);
    }

    getOptions() {
        let options = [];
        for(let i in this.config.api.endpoints) {
            options.push({
                code: this.config.api.endpoints[i].code,
                title: this.config.api.endpoints[i].title
            });
        }
        return options;
    }

    renderItems() {
        let {state} = this.props;
        if(state.forecast) {
            let id = 0;
            return state.forecast.map((item) => {
                return <Item key={id++} {...item} />
            })
        }
    }

    render() {
        return(
            <div>
                <Selector changeHandler={this.changeVendorSelector.bind(this)} options={this.getOptions()} />
                <Search clickHandler={this.clickFetchButton.bind(this)} />
                {this.renderItems()}
            </div>
        );
    }

}

export default connect(Index.select)(Index);