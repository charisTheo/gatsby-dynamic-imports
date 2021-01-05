import React from 'react'

const Lazy = ({ whatAmI }) => {
    console.log("lazy.js: I loaded! 🤤")
    return (
        <h2>I'm {whatAmI}</h2>
    )
}

export default Lazy
