const scaleName = {
    c: 'Celsius',
    f: 'Fahrendeit',
};

export default function TemperatureInpute({ temperature = '', onChange, scale }) {
    return (
        <fieldset>
            <legend>Enter Temperature in {scaleName[scale]}</legend>
            <input
                type="text"
                name="temperature"
                value={temperature}
                onChange={(e) => onChange(e, scale)}
            />
        </fieldset>
    );
}
