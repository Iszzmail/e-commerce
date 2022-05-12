import React from "react";
import '../style/tyle.css'


export class Application extends React.Component {
    constructor(props){
      super(props)
      
      //the Application component's state is below, which records the user's input. 
  
      this.state = {
        
        //the display property on state allows me to toggle the view of the form vs. the view of the user's data
        display: false,
        firstName : "",
        lastName : "",
        phone : 0,
        email : "",
      };
    }
    
   inputCheck = (e) => {
     let filter = e.target.getAttribute('filter')   
     e.target.value = e.target.value.replace(new RegExp(filter, 'g'), '')   
     this.setState({[e.target.name]: e.target.value})
     
   }
    
   submitCheck = () => {
     
     if(!this.state.firstName || !this.state.lastName){
       alert("A name field is empty.")
     } else if(this.state.phone.length < 10 || !this.state.phone){
       alert("Phone number is not long enough.")
     } else if (!this.state.email.match(/@./g)) {
       alert("Email is in the wrong format.")
     } else {
       this.setState({display: true})
     }
  }
   
   resetForm = () => {
     this.setState({
       display: !this.state.display,
       firstName: '', 
       lastName: '', 
       phone: 0, 
       email: ''     
     })    
   }
    //the displayForm function returns the JSX needed to display the form, and record the user's information
    displayForm() {

        
      return (

        <div className="form">
            
          <div className="header">
            <h1>Welcome!</h1>
            <p>Please provide your information below.</p>
          </div>
          <div className="inputcontainer">
            {/* Below are the text fields that record the user's information. Each uses the onChange event handler, and sets the user input value to the component's state in real time using e.target.value    */}
            <input filter="[^a-zA-Z ]" name="firstName" placeholder="First Name" onChange={this.inputCheck} />
            <input filter="[^a-zA-Z ]" name="lastName" placeholder="Last Name" onChange={this.inputCheck} />
            <input filter="[^0-9]" maxLength="10" name="phone" placeholder="Phone Number" onChange={this.inputCheck} />
            <input placeholder="Email Address" onChange={(e) => {this.setState({email:e.target.value})}} />
            
            {/* Below is the submit button. Using the onClick event handler, it changes the value of this.state.display to false, which would trigger the ternary in the render method to display the user's info instead of this form*/}
            <button onClick={this.submitCheck}>Submit</button>
          </div>
        </div>
      );
    }
    
    /* Below is my displayData function. It returns the JSX needed to display the user's info after it is recorded. */
    displayData() {
      return (
        <div className="form">
          
          {/*Below is the JSX that displays the user's info in the specified format*/}
          <p>{this.state.lastName}, {this.state.firstName}</p>
          <p>{this.state.phone} | {this.state.email}</p>
          
          
          {/* The button below contains an onClick handler that switches the value of this.state.display to true, and thus would bring the user back to the original form*/}
          <button onClick={this.resetForm}>Reset</button>
        </div>
      )
    }
    render() {
      {/* Here in the render method, I'm returning a ternary operator that displays either the form, or the user's data, depending on the boolean value that is currently set to this.state.display*/}
      return this.state.display ? this.displayData() : this.displayForm();
    }
  }
  
 