import React, { Component } from 'react';
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
  render(){
    return(
      <div>
        <div className="App-intro">
          <h1>What is component</h1>
          <p>In this lecture, we will go over the Component</p>
        </div>
        <div>
          <h4>Array: {this.props.propArray}</h4>
          <h4>Bool: {this.props.propBool ? "True": "False"}</h4>
          <h4>Function: {this.props.propFunc(5)}</h4>
          <h4>Number: {this.props.propNumber}</h4>
          <h4>String: {this.props.propString}</h4>
          <h4>Object: {this.props.propObject.objectName1}</h4>

        </div>
      </div>
    );
  }
}

Content.propTypes ={
  propArray: React.PropTypes.array.isRequired,
  propBool: React.PropTypes.bool.isRequired,
  propFunc: React.PropTypes.func,
  propNumber: React.PropTypes.number,
  propString: React.PropTypes.string,
  propObject: React.PropTypes.object
}

Content.defaultProps = {
  propArray: [1,2,3,4],
  propBool: true,
  propFunc: function(e){return e},
  propNumber: 1,
  propString: "String value ...",
  propObject: {
    objectName1: "objectValue1",
    objectName2: "objectValue2",
    objectName3: "objectValue3"
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
