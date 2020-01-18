import React from 'react'

const Notification = ({ message }) => {
    const notificationStyle = {
        color: 'red',
        fontStyle: 'italic',
        fontSize: 16
    }


    if (message === null) {
        return null
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )

}

export default Notification
