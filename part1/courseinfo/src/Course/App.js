import React from 'react'
import { Course } from './Course'

const App = ({ courses }) => {
    return (
        <div>

            { courses ? courses.map((course, id) => {
                return  <Course course={course.name}
                                parts={course.parts}
                                key={id}
                />
            }) : ''}

        </div>
    )
}

export default App
