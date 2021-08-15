/* eslint-disable jsx-a11y/mouse-events-have-key-events */
export default function MouseHoverNumber({ count, counter }) {
    return <p onMouseOver={counter}>Mouse Hover {count} times</p>;
}
