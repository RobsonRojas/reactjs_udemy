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
        <Header />
        < Content />
        <Clock />
      </div>
    );
  }
}

class Header extends Component{
  render(){
    return(
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
    );
  }
}

class Content extends Component{
  constructor(props){
    super(props);

    this.state = {
      data: [
        {
          "id": 1,
          "name": "Foo",
          "age": 35
        },
        {
          "id": 2,
          "name": "Dri",
          "age": 25
        },
        {
          "id": 3,
          "name": "Rob",
          "age": 32
        }
      ]
    };
  }
  render(){
    return(
        <p className="App-intro">
          <h1>What is component</h1>
          <p>In this lecture, we will go over the Component</p>
          <table>
            <thead>
              <th>
                <td>Id</td><td>Name</td><td>Age</td>
              </th>
            </thead>
            <tbody>
              {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
            </tbody>
          </table>
        </p>
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

    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timeId = setInterval(
      () => {this.tick()},
      1000
    )
  }

  tick(){
    this.setState({date: new Date()});
  }

  componentWillUnmount(){
    clearInterval(this.timeId);
  }

  render(){
    return(
      <div>
        <h1>Hello World!</h1>
        <h2>The current time is: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


//setInterval(tick, 1000);




export default App;
