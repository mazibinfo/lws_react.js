import { Component } from 'react';
import Button from './Button';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            local: 'bn-BD',
            button: 'Click for English',
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handleClick = () => {
        if (this.state.local === 'bn-BD') {
            this.setState({
                local: 'en-US',
                button: 'Click for Bangla',
            });
        } else if (this.state.local === 'en-US') {
            this.setState({
                local: 'bn-BD',
                button: 'Click for English',
            });
        }
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        // console.log('clock');
        const { date, local, button } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">Time: {date.toLocaleTimeString(local)}</span>
                </h1>
                <Button change={() => this.handleClick('param')} buttonValue={button} enable />
            </div>
        );
    }
}

export default Clock;
