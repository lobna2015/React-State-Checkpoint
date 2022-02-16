import React, { Component } from 'react'

export default class Child2 extends Component {
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
          <h1>FirstName : Lobna</h1>
          <h1>LastName : DRISSI</h1>
          <h2>Email : lobnadrissi2020@gmail.com</h2>
          <h2>Note : {this.state.note}</h2>
          <img src="./lobna.jpg" width="300px" height="400px"></img>
         
          </div>
       
         <h3>Note :</h3> <input type="number"  onChange={handleInputNote}></input><br/>
       
        

          <button onclick={ ()=> this.setState({show : !this.state.show })} >FixProfile</button><br/>
        


      </div>
    )
  }
}
