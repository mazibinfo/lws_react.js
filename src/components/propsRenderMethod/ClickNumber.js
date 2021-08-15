export default function ClickNumber({ count, counter }) {
    return (
        <button type="button" onClick={counter}>
            Click {count} times
        </button>
    );
}
