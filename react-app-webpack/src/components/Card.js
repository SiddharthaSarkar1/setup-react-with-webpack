import React from 'react'

const Card = ({children}) => {

    const cardStyle = {
        width: "200px",
        height: "200px",
        border: "2px solid black",
        borderRadius: "2px",
        padding: "4px",
        margin: "4px"
    }

  return (
    <div style={cardStyle}>
        {children}
    </div>
  )
}

export default Card