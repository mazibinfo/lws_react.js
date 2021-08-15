import { useState } from 'react';

function AppUseState() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

    const changeHadler = (e) => {
        const inputValue = e.target.value;
        const warningValue = inputValue.includes('.js')
            ? 'You need java scripts skill to complete the task. Do you have it?'
            : null;
        setTodo(inputValue);
        setWarning(warningValue);
    };

    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea value={todo} onChange={changeHadler} />
            </p>
            <hr />
            <h2>{warning || 'Good Job!'}</h2>
        </div>
    );
}

export default AppUseState;
