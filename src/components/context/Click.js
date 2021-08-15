/* eslint-disable jsx-a11y/mouse-events-have-key-events */
export default function ClickNumber({ count, counter, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
    return (
        <div>
            <p onMouseOver={counter} style={style}>
                Mouse Hover {count} times
            </p>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    );
}
