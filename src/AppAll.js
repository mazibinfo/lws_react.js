import React, { Component } from 'react';
import ClickCounter from './components/ClickCounter';
import ClockList from './components/ClockList';
import Section from './components/context/Section';
import ThemeContext from './components/context/ThemeContext';
import Form from './components/Form';
import HoverCounter from './components/HoverCounter';
import ClickNumber from './components/propsRenderMethod/ClickNumber';
import Counter from './components/propsRenderMethod/Counter';
import MouseHoverNumber from './components/propsRenderMethod/MouseHoverNumber';

class App extends Component {
    state = {
        // eslint-disable-next-line react/no-unused-state
        theme: 'dark',
        // eslint-disable-next-line react/no-unused-state
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'dark',
                };
            });
        },
    };

    render() {
        const clockNumber = [1];
        return (
            <div>
                <ClockList number={clockNumber} />
                <br />
                <Form />
                <br />
                <fieldset>
                    <legend>Counter by using HOC (Higher Order Component)</legend>
                    <ClickCounter />
                    <HoverCounter />
                </fieldset>
                <br />
                <fieldset>
                    <legend>Counter by using Render Props Methods</legend>
                    <Counter>
                        {(counter, incrementCount) => (
                            <ClickNumber count={counter} counter={incrementCount} />
                        )}
                    </Counter>
                    <Counter>
                        {(counter, incrementCount) => (
                            <MouseHoverNumber count={counter} counter={incrementCount} />
                        )}
                    </Counter>
                </fieldset>
                <br />
                <fieldset>
                    <legend>Context API</legend>
                    <p>This is App</p>
                    <ThemeContext.Provider value={this.state}>
                        <Section />
                    </ThemeContext.Provider>
                </fieldset>
            </div>
        );
    }
}
export default App;
