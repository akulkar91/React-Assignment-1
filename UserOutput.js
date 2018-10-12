import React from 'react';

const UserOutput = (props) => {
    return(
        <div>
            <p onClick={props.click}>Hi UserName is {props.name}</p>
            <p>--{props.name}--</p>
        </div>
   )
}

export default UserOutput