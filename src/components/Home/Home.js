import logo from "../../logo.svg";
import "../../App.css";
import MyComponent from "../Example/MyComponent";
import ValidateForm from "../Example/ValidateForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

export default class Home extends React.Component{
  state = {
    arrJobs: [
      { id: 'abcJob1', title: 'Developers', salary: '500' },
      { id: 'abcJob2', title: 'Testers', salary: '400' },
      { id: 'abcJob3', title: 'Project managers', salary: '1000' }
  ]
  }
  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job]
    })
  }
  deleteJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
        arrJobs: currentJobs
    })
  }
  render(){
    return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <MyComponent />
        <ValidateForm/>
        <AddComponent
          addNewJob={this.addNewJob}
        />
        <ChildComponent
          arrJobs = {this.state.arrJobs}
          onClick={this.deleteJob}
        />
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />
      </header>
    </>
  );
}
}
