import React, { Component } from 'react';

class Button extends Component {
    shouldComponentUpdate(nextProps) {
        const { buttonValue: cValue } = this.props;
        const { buttonValue: nValue } = nextProps;

        if (cValue === nValue) {
            return false;
        }
        return true;
    }

    render() {
        // console.log('button');
        const { change, buttonValue } = this.props;
        return (
            <div>
                <button type="button" onClick={change}>
                    {buttonValue}
                </button>
            </div>
        );
    }
}

export default Button;
