import  { Component } from 'react';

// Define props type
interface MyComponentProps {
  message?: string;
  manage: number; // Define manage as a prop
}

// Define state type
interface MyComponentState {
  manage: number; // Define manage as part of the state
}

class Mydata extends Component<MyComponentProps, MyComponentState> {
  constructor(props: MyComponentProps) {
    super(props);

    // Initialize state
    this.state = {
      manage: props.manage // Initialize state with prop value
    };
  }

  // Method to handle button click
   handleClick = () => {
    this.setState({ manage: this.state.manage + 87 });
  }

  render() {
    return (
      <div>
        <h1>{this.props.message || "snoop dog"}</h1>
        <p>manage: {this.state.manage}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default Mydata;
