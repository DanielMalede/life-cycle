import { Component } from "react";

export default class FirstName extends Component{
    constructor(){
        super()
        this.state={F_name:"Daniel"}
    }
    componentWillMount(){
        alert("wasap")
    }
    componentDidMount(){
        console.log("aappp");
    }
    getValueOfF_name(event){
        // eslint-disable-next-line
        this.setState({F_name:event.target.value})
    }
    componentWillUpdate(){
        console.log("yepika");
    }
    componentDidUpdate(){
        alert("yey *******")
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.F_name} onChange={(e)=>this.getValueOfF_name(e)}/>
            </div>
        )
    }
}