import React from 'react';

function RandomOne(props){
    return(
        <div className="randomOne">
            <p>
                Random value between {props.min} and {props.max} {'=>'} {Math.floor(Math.random() * (props.max - props.min) +props.min)}
            </p>
        </div>
    )

}

export default RandomOne;