import React, { useEffect, useReducer } from 'react';

const initialState = {
    loading: true,
    error: '',
    post: {},
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                loading: false,
                error: '',
                post: action.result,
            };
        case 'failure':
            return {
                loading: false,
                error: 'Something went wrong!',
                post: {},
            };
        default:
            return state;
    }
};

export default function Post() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: 'success', result: data });
            })
            .catch(() => {
                dispatch({ type: 'failure' });
            });
    }, []);

    return (
        <div>
            <p>{state.loading ? 'loading.....' : state.post.title}</p>
            <p>{state.error || null}</p>
        </div>
    );
}
