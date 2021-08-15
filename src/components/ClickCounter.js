import withCounter from '../HOC/withCounter';

function ClickCounter({ count, counter }) {
    return (
        <div>
            <button type="button" onClick={counter}>
                Click {count} times
            </button>
        </div>
    );
}

export default withCounter(ClickCounter);
