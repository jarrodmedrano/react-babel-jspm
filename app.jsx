import React from 'react'
import ReactDOM from 'react-dom'

// Import non-js files like this, with the extension and an exclamation point:
import Hero from 'components/hero.jsx!'

(() => {
    ReactDOM.render(
        <Hero />,
        document.getElementById('react-app')
    )
})()