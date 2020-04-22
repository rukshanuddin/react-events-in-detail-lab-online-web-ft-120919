import React, { Component } from 'react';

class DelayedButton extends Component {

    handleClick = (event) => {
      event.persist();
      window.setTimeout(() => {
        this.props.onDelayedClick(event)
    },
        this.props.delay);
    }
    render() {
      return ( <button onClick = {
          this.handleClick
        }>Delayed Click</button>
      )
    }
}

export default DelayedButton;