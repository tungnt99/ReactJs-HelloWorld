import React from "react";
export default class MyComponent extends React.Component {
  state = {
    name: "",
    address: "Ha Noi",
    toggle: false,
    showJobs: false,
  };
  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs
    });
  }
  handleOnChangName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  toggleButton = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  handleClickButton = () => {
    alert("Click button");
  };
  render() {
    let fullname = "Nguyen Thanh Tung";
    let { name } = this.state;
    let { toggle } = this.state;
    let { showJobs } = this.state;
    return (
      <>
       
        {showJobs === false &&  <div><button onClick={this.handleShowHide}>Show</button></div>}
        {showJobs && 
          <>
            <div><button onClick={this.handleShowHide}>Hide</button></div>

            <div>
              <h4>{fullname}</h4>
              <input
                type="text"
                value={name}
                onChange={(event) => this.handleOnChangName(event)}
              />
              <p>Hello {this.state.name}</p>
              <p>From {this.state.address}</p>

              <button className="button-edit-content" onClick={this.toggleButton}>
                {toggle === false ? "Nhấn vào để thay đổi" : "Đã thay đổi"}
              </button>
              <div className="third">
                <button onClick={() => this.handleClickButton()}>Click me!</button>
              </div>
            </div>
          </>
        }
      </>
    );
  }
}
