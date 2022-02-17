import React, { Component } from 'react'

export default class Child1 extends Component {
state ={
    
    note : 0 ,
    show : true,

};
shouldComponentUpdate(nextProps, nextState) { 
    if(this.state.show) return true;
    return false;
 }

  render() {
    
    const handleInputNote = (e) => { this.setState({ note : e.target.value}) }
    return (
      <div>
          <div>
          <h1>FirstName : Sami</h1>
          <h1>LastName : HAMDI</h1>
          <h2>Email : samihamdi2020@gmail.com</h2>
          <h2>Note : {this.state.note}</h2>
          <img src="./sami.jpg" width="400px" height="400px"></img>
         
          </div>
       
         <h3>Note :</h3> <input type="number"  onChange={handleInputNote}></input><br/>
       
        

          <button onclick={ ()=> this.setState({show : !this.state.show })} >FixProfile</button><br/>
        


      </div>
    )
  }
}
