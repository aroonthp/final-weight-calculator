import React, { Component } from 'react'

export default class Input extends Component {
  constructor(props){
    super();
    this.state = {
      InputValue: "",
      result:"",
      resullt:"",
      resullt:"",
      resulllt:"",
      resullllt:"",
      total:""
      
     
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
  kgValue=(e)=>{
    this.setState({
      InputValue:e.target.value
    });
  }
  ///////////////////////////
   pound =(e)=>{
     const cp=this.state.InputValue*2.20462;
     this.setState({
       resulllt:cp
     });
   }
   PoindValue=(e)=>{this.setState({
     InputValue:e.target.value

   });
  }

    kg=(e)=>{
      const dp=this.state.InputValue/2.20462;
      this.setState({
        resullllt:dp
      });
    }
    nepValue=(e)=>{
      this.setState({InputValue:e.target.value
        
      });
    }
    ic=(e)=>{
      const ep=this.state.InputValue*1.6;
      this.setState({
        total:ep
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
     <h1>kg and  pound </h1>
     <form>
        <label>
          Kg:
          <input type="text"  onChange={this.kgValue}/>
        </label>
        <input type="button" value="CONVERT" onClick={this.pound}/>
        <label>
        pound:{this.state.resulllt}
        
        </label>
      </form>
      
      <form>
        <label>
          Pound:
          <input type="text"  onChange={this.poundValue}/>
        </label>
        <input type="button" value="CONVERT" onClick={this.kg}/>
        <label>
        Kg:{this.state.resullllt}
        
        </label>
      </form>
      <h1> currency convert </h1>
      <form>
        <label>
         NEP :
          <input type="text"  onChange={this.nepValue}/>
        </label>
        <input type="button" value="CONVERT" onClick={this.ic}/>
        <label>
        IC:{this.state.total}
        
        </label>
      </form>
     
       
           
      </div>
    )
  }
}


















































