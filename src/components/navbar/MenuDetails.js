import React from 'react';
import { useParams } from 'react-router-dom';

export default function MenuDetails() {
    const { id } = useParams();
    console.log(useParams());
    return (
        <div>
            <h1>This is Menu Details Page!</h1>
            <p>Menu ID: {id}</p>
        </div>
    );
}
