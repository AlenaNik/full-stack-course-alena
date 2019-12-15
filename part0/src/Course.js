import React from 'react';
import Part from './Part';
import Header from './Header';

const Course = ({ part }) => {
    const { name, parts, exercises } = part;
    const total = parts.reduce((acc, part) => {
        console.log(acc, part)
        return acc + exercises;
    }, 0);

    return(
          <>
              <Header name={name}/>
              {parts.map(part => <Part key={part.id}
                                       part={part} />)}
                <p>total of {total} exercises </p>
          </>

    )
}
export default Course;
