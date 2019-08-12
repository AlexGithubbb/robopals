import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import robots from '../robots';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor(){
    super();
    this.state = {
      // robots: [],
      serachfield: ""
    }
  }

  // get users name and email form jsonplaceholder api (only 10 users)
  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => {this.setState({robots : users})})
  //     //this makes the page with 0 robot to show
  //     // .then(users => {});
  // }

  // componentWillMount(){
  //   console.log("componentWillMount");
  // }

  onsearchChange = (event) => {
    this.setState({ serachfield: event.target.value });
  }

  render(){
    // const {robots, serachfield} = this.state; // destructuring 
    const {serachfield} = this.state; // destructuring 
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(serachfield.toLowerCase());
    })
    return !robots.length ?
      <h1>loading</h1>:
      (
        <div className="tc">
          <h1 className="f1">Robot Friends</h1>
          <SearchBox searchChange={this.onsearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      )
    }
}

export default App;



