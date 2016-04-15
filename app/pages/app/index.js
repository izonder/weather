// imports Style
import Style from './style.pcss';

// imports Base
import React from 'react';

class App extends React.Component {
    static select(state) {
        return state.app
    }

    render() {
        return(
            <div className="app-container">
                {this.props.children}
            </div>
        );
    }

}

export default App;