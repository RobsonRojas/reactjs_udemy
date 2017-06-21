import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      headerText: "Welcome to React",
      contentText: "To get started, edit <code>src/App.js</code> and save to reload."
    };
  }
  render() {
    return (
      <div className="App">
        {/*<h1>{this.state.headerText}</h1>
        <p>{this.state.contentText}</p>*/}
        <Header header={this.props.header} />
        < Content content={this.props.content}/>
        {/*<Clock increment={1} />*/}

      </div>
    );
  }
}

App.defaultProps = {
  header: "Default props from the header",
  content: "Default props from the content"
}

class Header extends Component{
  render(){
    return(
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*<h2>Welcome to React</h2>*/}
          {this.props.header}
        </div>
    );
  }
}

class Content extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: [],
      counter: 0
    };

    this.updateMyState = this.updateMyState.bind(this);
    this.forceUpdateRandomNumber = this.forceUpdateRandomNumber.bind(this);
    this.findMyDomNode = this.findMyDomNode.bind(this)
  }
  updateMyState() {
      var count = this.state.counter;
      count++;
      var item = "Click -" + count;
      var myArray = this.state.data;
      myArray.push(item);

      this.setState({
        data: myArray,
        counter: count
      })
  }
  forceUpdateRandomNumber(){
    this.forceUpdate();
  }
  findMyDomNode(){
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'red';
  }
  render(){
    return(
      <div className="App-intro">
        <h1>Components API!</h1>
        <p>In this lecture, we will go over the ComponentS API</p>
        <button onClick={this.updateMyState}>Click Me</button>
        <h4>State data: {this.state.data}</h4>
        <button onClick={this.forceUpdateRandomNumber}>Random Number</button>
        <h4>Random number: {Math.random()}</h4>
        <button onClick={this.findMyDomNode}>Find my Dom Node</button>
        <div id="myDiv">this is my div</div>
      </div>
    );
  }
}


class TableRow extends Component{
  render(){
    return(
        <tr>
          <td>{this.props.data.id}</td>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.age}</td>
        </tr>
    );
  }
}

class Clock extends Component{
  constructor(props){
    super(props);

    this.state = {
      date: new Date(),
      message: "Hello"
    };
  }

  componentDidMount(){
    this.timeId = setInterval(
      () => {this.tick()},
      1000
    )
  }

  tick(){
    this.setState(
      {
        date: new Date(),
        message: this.state.message + "x"
      }
      );
  }

  componentWillUnmount(){
    clearInterval(this.timeId);
  }

  render(){
    return(
      <div>
        <h1>Hello World!</h1>
        <h2>The current time is: {this.state.date.toLocaleTimeString()}</h2>
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}


//setInterval(tick, 1000);




export default App;
