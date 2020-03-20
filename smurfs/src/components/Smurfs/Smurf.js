import React from 'react';

const Smurf = ({name, age, height}) =>{
    return (
        <>
            <h2>
                {name}
            </h2>
            <p>Age: {age} years old</p>
            <p>Height: {height}</p>
        </>
    )
}

export default Smurf;