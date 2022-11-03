import React from "react";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../../../view/HOC/Color";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making videos" },
      { id: "todo3", title: "Fixing bugs" },
    ],
    editTodo: {},
  };
  /**
   * add todo app
   * @param {*} todo
   */
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Wow so easy!");
  };
  /**
   * @returns delete todo
   */
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.success("Delete !");
  };
  /**
   * edit todo
   */
  handleEditTodo = (todo) => {
    let {editTodo, listTodos} = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    // Save
    if(isEmptyObj === false && editTodo.id === todo.id) {
      let ListTodoCopy = [...listTodos];
      //Find index of specific object using findIndex method.    
      let objIndex = ListTodoCopy.findIndex((item => item.id === todo.id));
      //Update object's name property.
      ListTodoCopy[objIndex].title = editTodo.title;

      this.setState({
        listTodos: ListTodoCopy,
        editTodo: {}
      })

      toast.success("Edit successful!");

      return;
    }
      // Edit
      this.setState({
        editTodo: todo,
      });
    
  };
  /**
   * 
   * @returns Nhập dữ liệu đã edit
   */
   handleOnchangeEditTodo = (event) =>{
      let editTodoCopy = {...this.state.editTodo};
      editTodoCopy.title = event.target.value;
      this.setState({
        editTodo: editTodoCopy,
      })
   }
  render() {
    let { listTodos, editTodo } = this.state;
    /**
     * Kiểm tra object có bằng rỗng hay không
     */
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <>
        <div className="list-todo-container">
          <h1>List Todo App Hello</h1>
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos && listTodos.length > 0 && listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? 
                      <span> {index + 1} - {item.title} </span>
                     : 
                     <>
                     {editTodo.id === item.id ?
                      <span> {index + 1} - <input 
                        value={editTodo.title} 
                        onChange={(event) => this.handleOnchangeEditTodo(event)}
                        /> 
                      </span>
                      :
                      <span> {index + 1} - {item.title} </span>

                     }
                     </>
                    }
                    <div className="todo-button">
                      <button onClick={() => this.handleEditTodo(item)}>
                        {isEmptyObj === false && editTodo.id === item.id ? 'Save': 'Edit'}
                      </button>
                      <button onClick={() => this.handleDeleteTodo(item)}>
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default Color(ListTodo);