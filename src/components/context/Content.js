import { useContext } from 'react';
import Counter from '../propsRenderMethod/Counter';
import Click from './Click';
import ThemeContext from './ThemeContext';

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } = context;
    return (
        <div>
            <p>This is Content</p>
            <Counter>
                {(count, counter) => (
                    <Click
                        count={count}
                        counter={counter}
                        theme={theme}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}
