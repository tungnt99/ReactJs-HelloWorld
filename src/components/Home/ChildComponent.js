import React from "react";
export default class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    }
    handleShowHide = () => {
        this.setState({
          showJobs: !this.state.showJobs
        });
      }
  
    render(){
        let {arrJobs} = this.props;
        let {showJobs} = this.state

        return(
            <>
                {showJobs === false ? 
                    <div><button onClick={this.handleShowHide}>Show ValidateForm</button></div>
                :
                <>
                    <div className="job-lists">
                        {arrJobs.map((item, index) =>{
                            return(
                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                    <span><button onClick={() => this.props.onClick(item)}>Delete</button></span>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div><button onClick={this.handleShowHide}>Hide</button></div>

                </>
                }
            </>
        )
    }
}