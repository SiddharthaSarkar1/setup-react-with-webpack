import React from 'react'

const BoxContainer = (props) => {
  return (
    <div style={{ width: "200px", height: "200px", backgroundColor: "grey", color: "white" }}>
      <h1>children props</h1>
      {props.value}
      {props.children}
    </div>
  )
}

export default BoxContainer
