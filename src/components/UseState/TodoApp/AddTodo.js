import React from "react";
import { toast } from "react-toastify";

export default class AddTodo extends React.Component {
  /**
   * giá trị ban đầu của value
   */
  state = {
    title: "",
  };
  /**
   * Lấy value từ form input thay vào state ban đầu
   * @param {*} event
   */
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  /**
   * Gửi value từ form input thay vào state ban đầu và in ra
   */
  handleAddTodo = () => {
    /**
     * Không có dữ liệu sẽ cảnh báo đến người dùng
     */
    if (!this.state.title) {
      toast.error("Missing title!");
      return;
    }
    /**
     * Truyền value đã setState vào biến todo
     */
    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };
    /**
     * Gửi dữ liệu trong biến todo truyền qua props vào addNewTodo
     */
    this.props.addNewTodo(todo);
    /**
     * Khi gửi xong trả về value rỗng
     */
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <button type="button" onClick={() => this.handleAddTodo()}>
          Add
        </button>
      </div>
    );
  }
}
