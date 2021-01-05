import React, { useState } from 'react'

const Button = () => {
    const [ LazyComponent, setLazyComponent ] = useState(null)

    const loadLazyComponent = async () => {
        if (LazyComponent !== null) {
            return
        }

        // import the default export of the `lazy.js` module
        const { default: lazyModule} = await import(/* webpackChunkName: "LazyComponent" */ './lazy')
        // create the React component so it can be rendered
        const LazyElement = React.createElement(lazyModule, {
            // pass props to component here
            whatAmI: "lazy! 🤤"
        })
        setLazyComponent(LazyElement)
    }

    return (
        <>
            <button onClick={loadLazyComponent}>Lazy load component</button>
            {LazyComponent}
        </>
    )
}

export default Button
