import React from 'react'
import Color from '../view/HOC/Color';

import {connect} from 'react-redux';
class Redux extends React.Component{

     handleDeleteUser = (user) => {
         console.log(user)
         this.props.deleteUserRedux(user);
     }
     handleCreateUser = () => {
        this.props.addUserRedux();
     }
    render(){
        // console.log(this.props.dataRedux)
        let listUsers = this.props.dataRedux;

        return (
          <div>
            {listUsers && listUsers.length > 0 && listUsers.map((item, index) =>{
                return(
                    <div key={index} className="d-flex justify-content-center align-items-center">
                        <p className='m-2'>{index + 1}</p>
                        <p className='m-2'>{item.name}</p>
                        <button className='m-2' onClick = {() => this.handleDeleteUser(item)}>X</button>

                    </div>
                )
            })}
            <button className='m-2' onClick = {() => this.handleCreateUser()}>Add New</button>
          </div>
        )

    }
}
const mapStateToProps = (state) => {
    return{
        dataRedux: state.users
    }

}
const mapDispatchToProps = (dispatch) =>{
    return{
        deleteUserRedux: (userDelete)=> dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'})

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Redux));