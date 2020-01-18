import React from 'react'

const NotificationPositive  = ({ message }) => {
    const notificationStyleGreen = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
    }

    if (message === null) {
        return null
    }

    return (
        <div style={notificationStyleGreen}>
            {message}
        </div>
    )

}

export default NotificationPositive
