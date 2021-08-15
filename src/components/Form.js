import React, { Component } from 'react';
import { convert, toCelsius, toFahrenheit } from '../lib/Converter';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInpute from './TemperatureInpute';

class From extends Component {
    state = {
        name: '',
        description: '',
        gender: '',
        isActive: false,
        temperature: '',
        scale: 'c',
    };

    handleChange = (e, scale) => {
        const { name } = e.target;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [name]: value,
            scale,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(this.state));
    };

    render() {
        const { name, description, gender, isActive, temperature, scale } = this.state;
        const celsius = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
        const fahrenheit = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        return (
            <div>
                <fieldset>
                    <legend>Form Data</legend>
                    <form onSubmit={this.handleSubmit}>
                        <span>Name :</span> <br />
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={this.handleChange}
                        />
                        <br />
                        <span>Description : </span> <br />
                        <textarea
                            name="description"
                            placeholder="Describe Yourself"
                            value={description}
                            onChange={this.handleChange}
                        />
                        <br />
                        <span>Gender : </span> <br />
                        <select name="gender" value={gender} onChange={this.handleChange}>
                            <option value="">Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <br />
                        <span>Active?</span> <br />
                        <input
                            type="checkbox"
                            name="isActive"
                            checked={isActive}
                            onChange={this.handleChange}
                        />
                        <br />
                        <input type="submit" name="submit" />
                    </form>
                </fieldset>
                <br />
                <fieldset>
                    <legend>Temperature Converter</legend>
                    <div>
                        <TemperatureInpute
                            temperature={fahrenheit}
                            onChange={this.handleChange}
                            scale="c"
                        />
                        <TemperatureInpute
                            temperature={celsius}
                            onChange={this.handleChange}
                            scale="f"
                        />
                        <BoilingVerdict temperature={temperature} />
                    </div>
                </fieldset>
            </div>
        );
    }
}

export default From;
