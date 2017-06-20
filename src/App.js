//bring in React and Component from React

import React, {Component} from 'react';

//define our Hello component
class Post extends Component {
  //what should the component render? 
  render () {
    //make sure to return some UI
    return (
      <div>
        <h1>{this.props.title}!</h1>
        <h3>{this.props.author}</h3>
        <p>{this.props.body}</p>
        <h4>Comments:</h4>
        <p>{this.props.comments[0]}</p>
      </div>
    );
  }
}

export default Post