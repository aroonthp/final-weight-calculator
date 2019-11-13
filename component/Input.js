import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props){
    super();
    this.state = {
      InputValue: "",
      result:"",
     
    }
  }
  handleChange = (e)=>{
    this.setState({
      InputValue:e.target.value
    });
  }
  converter = ()=>{
    const ap = this.state.InputValue *1000;
    this.setState({
      result:ap
    });
  }
  restValue = (e)=>{
    this.setState({
      InputValue:e.target.value
    });
  }
  converterr = ()=>{
    const bp = this.state.InputValue /1000;
    this.setState({
      resullt:bp
    }); 
  }
   
  render() {
    return (
      <div>
      <form>
        <label>
          KG:
          <input type="text"  onChange={this.handleChange}/>
        </label>
        <input type="button" value="CONVERT" onClick={this.converter}/>
        <label>
        Gram:{this.state.result}
        
        </label>
      </form>
      <form>
        <label>
          GRAM:
          <input type="text"  onChange={this.restValue}/>
        </label>
        <input type="button" value="CONVERT" onClick={this.converterr}/>
        <label>
        KG:{this.state.resullt}
        
        </label>
      </form>
      </div>
    )
  }
}


















































