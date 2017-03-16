import React, { Component } from 'react';
import './App.css';


class TextToggle extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      isToggled: this.props.isToggled ? this.props.isToggled : false
    };
    this.textSwitch = this.textSwitch.bind(this);

  }


  render() {
    return (
      <div className="Test-test">
        <a onClick={this.textSwitch}>
          <span>
            {this.state.isToggled ? 'Hello World' : 'Hello Portland'}
          </span>
        </a>

      </div>
    );
  }
  textSwitch(e) {
    this.setState({
      isToggled: !this.state.isToggled
    });
    console.log(this.state.isToggled)
  }

}
export default TextToggle;
