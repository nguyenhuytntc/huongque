import React from 'react';
import { Link } from 'react-router-dom';
import Slide from './Slide';

function Home() {
    return (
        <Link to="/:productDetail">
            <Slide />
        </Link>
    );
}

export default Home;
