import React from 'react'

class Hero extends React.Component {

    constructor() {
        // Always call super() as the first thing you do in an extended constructor!
        super()

        // In ES6, initial state is set as a property of the class
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>Jarrod Medrano</h1>
            </div>
        )
    }
}

export default Hero