import React from 'react';
import * as actions from "./redux/actions";

class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.props.store.subscribe(() => {
            this.setState({
                count: this.props.store.getState()
            });
        })
    }


    state = {
        count: 0
    }

    increment = () => {
        this.props.store.dispatch(actions.incrementCreator(2))
    }

    decrement = () => {
        this.props.store.dispatch(actions.decrementCreator(2))
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        );
    }

}

export default App;
