import React, { Component } from 'react'
import Coin from './Coin'

class Flip extends Component {
    static defaultProps = {
        Heads: 'https://tinyurl.com/react-coin-heads-jpg',
        Tails: 'https://tinyurl.com/react-coin-tails-jpg'
    }
    constructor(props) {
        super(props);
        this.state = {
            flips: 0,
            countHeads: 0,
            countTails: 0,
            face: ''
        }
    }

    getCoin = () => {
        const num = Math.floor(Math.random() * 2);
        const coinFace = (num == 1 ? this.props.Heads : this.props.Tails);
        this.setState({face: coinFace})

        if (num == 1) {
            this.setState(currState => ({countHeads: currState.countHeads + 1, flips: currState.flips + 1}))
        } else {
            this.setState(currState => ({countTails: currState.countTails + 1, flips: currState.flips + 1}))
        }
    }

    handleClick = () => {
        this.getCoin();
    }

    render() {
        return (
            <div>
                <h1>Coin Flip</h1>
                {this.state.flips !== 0 ? <Coin {...this.state} /> : <div></div>}
                <button onClick={this.handleClick}>Flip Coin</button>
                <h3>Out of {this.state.flips}, there have been {this.state.countHeads} Heads and {this.state.countTails} Tails.</h3>
            </div>
        )
    }
}

export default Flip;