import { Component } from "react";

export default class Family extends Component {
  constructor() {
    super();
    this.state = { Family: "Malede" };
  }
  componentWillMount() {
    alert("Welcome");
  }
  componentDidMount() {
    console.log("Hello");
  }
  getValueOfFamily(event){
    // eslint-disable-next-line
    this.setState({Family:event.target.value})
  }
  componentWillUpdate(){
    console.log("hi");
  }
  componentDidUpdate(){
    alert("bye")
}
  render() {
    return( <div>
        <input type="text" value={this.state.Family} onChange={(e)=>this.getValueOfFamily(e)}/>
    </div>
    )
  }
}
