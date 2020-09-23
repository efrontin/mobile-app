import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{
    state = {
        display: false
    }

    componentDidMount() {
        this.setState({display:true});
    }
    changeState = () => {
        this.setState({
            display: !this.state.display
        })
    }

    render () {

        console.log(this.state.display)
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

              {this.state.display &&
                <div>Button has been clicked</div>
              }
              <br/>
              <button onClick={this.changeState}>
                  Changer l'état
              </button>
          </header>
        </div>

    );
  }

}

