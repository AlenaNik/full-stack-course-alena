import React from 'react'
import { Part } from './Part'

export const Content = ({parts}) => {
    return (
        <>
        {
            parts ? parts.map((item, id) => {
              return  <Part part={item.name}
                            key={id}
                            exersise={item.exercises}
              />
            }) : ''
        }
        </>
    )
};
