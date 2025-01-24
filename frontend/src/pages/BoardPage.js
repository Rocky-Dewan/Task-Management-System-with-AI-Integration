// src/pages/BoardPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const BoardPage = () => {
    const { id } = useParams();

    return (
        <div>
            <h1>Board ID: {id}</h1>
            <p>This is the board page for board ID: {id}</p>
        </div>
    );
};

export default BoardPage;
