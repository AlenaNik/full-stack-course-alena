import React from 'react'
import {Header} from "./Header";
import {Content} from "./Content";
import {Total} from "./Total";

export const Course = ({ course, parts }) => {
    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}
            />
            <Total parts={parts}/>
        </div>
    )
}
