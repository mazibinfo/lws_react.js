function BoilerPlate({ temperature }) {
    const boilerPlate =
        parseFloat(temperature) >= 100 ? (
            <p>
                <strong>Info:</strong> Water would be boiled
            </p>
        ) : (
            <p>
                <strong>Info:</strong> Water would not be boiled
            </p>
        );
    return <div>{boilerPlate}</div>;
}

export default BoilerPlate;
