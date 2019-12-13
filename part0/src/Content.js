import React from 'react';
import Part from './Part';
const Content = (props) => {
    return(
        <>
            <Part part={props.parts} />
        </>
    )
}

export default Content;
