import React, { useState } from 'react';
import NewMovieAdd from './NewMovieAdd';

const AddMovies = () => {
    const [count, setCount] = useState(0);
    const hendleIncrice = () => setCount(count + 1);
    const hendleDecrice = () => setCount(count - 1);

    return (
        <div>
            <button onClick={hendleIncrice}>add</button>
            <h2>add movies: {count}</h2>
            <button onClick={hendleDecrice}>due</button>
            <NewMovieAdd movies={count}></NewMovieAdd>
            <NewMovieAdd movies={count+3}></NewMovieAdd>
            <NewMovieAdd movies={count+6}></NewMovieAdd>
            <NewMovieAdd movies={count+78}></NewMovieAdd>
            <NewMovieAdd movies={count}></NewMovieAdd>
        </div>
    );
};

export default AddMovies;