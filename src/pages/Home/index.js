import React from 'react';
import { Link } from 'react-router-dom';
import NewProducts from './NewProducts';
import Policys from './Policys';
import Slide from './Slide';

function Home() {
    return (
        <div>
            <Slide />
            <Policys />
            <NewProducts />
        </div>
    );
}

export default Home;
