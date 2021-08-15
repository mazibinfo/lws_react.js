/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import withCounter from '../HOC/withCounter';

function HoverCounter({ count, counter }) {
    return <p onMouseOver={counter}>Mouse Hover {count} times</p>;
}

export default withCounter(HoverCounter);
