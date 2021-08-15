import React, { Component } from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponent extends Component {
        state = {
            count: 0,
        };

        counter = () => {
            this.setState((prevState) => ({
                count: prevState.count + 1,
            }));
        };

        render() {
            const { count } = this.state;
            return <OriginalComponent count={count} counter={this.counter} />;
        }
    }
    return NewComponent;
};

export default withCounter;
