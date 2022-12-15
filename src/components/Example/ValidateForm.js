import React from "react";
import { toast } from "react-toastify";

export default class ValidateForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        showJobs: false,
    }
    handleOnChangName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }
    handleOnChangLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        if(!this.state.firstName){
            toast.error("Missing firstName!");
            return;
        }
 
        this.setState({
            ho: this.state.firstName,
            ten: this.state.lastName,
        })
        this.setState({
            firstName: "",
            lastName: ""
          });
    }
    handleShowHide = () => {
        this.setState({
          showJobs: !this.state.showJobs
        });
      }
    render(){
        let {firstName} = this.state
        let {lastName} = this.state
        let {showJobs} = this.state
        return(
            <>
                {showJobs === false ?
                    <div><button onClick={this.handleShowHide}>Show ValidateForm</button></div>
                    :
                    <>
                        <div><button onClick={this.handleShowHide}>Hide</button></div>
                        <div>
                            <form >
                                <label htmlFor="fname">First name: {firstName}</label><br/>
                                <input type="text" value={firstName} onChange={(event) => this.handleOnChangName(event)}/><br/>
                                <label htmlFor="lname">Last name:{lastName}</label><br/>
                                <input type="text" value={lastName} onChange={(event) => this.handleOnChangLastName(event)}/><br/>
                                <input type="submit" value="Submit" onClick={(event)=>this.handleSubmit(event)}/>
                            </form> 
                            <p>{this.state.ho} - {this.state.ten}</p>
                        </div>

                    </>
                }

            </>
        )
    }
}