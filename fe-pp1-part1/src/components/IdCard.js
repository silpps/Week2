import React from 'react';

function IdCard(props){
    return (
        <div className="text">
            <p>
                <strong>First name:</strong> {props.firstName}
            </p>
            <p>
                <strong>Last name:</strong> {props.lastName}
            </p>
            <p>
                <strong>Gender:</strong> {props.gender}
            </p>
            <p>
                <strong>Height:</strong> {props.height}
            </p>
            <p>
                <strong>Birth:</strong> {props.birth}
            </p>
        </div>
    )
}

export default IdCard;