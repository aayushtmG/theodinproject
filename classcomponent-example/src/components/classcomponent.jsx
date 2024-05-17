import React, { Component } from "react"
import Count from "./Count"

class ClassInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: ["Just some demo tasks", "As an example"],
      inputVal: "",
      editingIndex: null,
      editingVal: "",
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.delete = this.delete.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }))
  }

  handleSubmit(e) {
    e.preventDefault()
    if (this.state.inputVal) {
      this.setState((state) => ({
        todos: state.todos.concat(state.inputVal),
        inputVal: "",
      }))
    }
  }

  delete(todo) {
    const updatedTodos = [...this.state.todos]
    updatedTodos.splice(todo, 1)
    this.setState((state) => ({
      todos: updatedTodos,
      inputVal: "",
    }))
  }
  editMode(index) {
    this.setState((state) => {
      return {
        ...state,
        editingVal: state.todos[index],
        editingIndex: index,
      }
    })
  }

  handleEdit(e) {
    this.setState((state) => ({
      ...state,
      editingVal: e.target.value,
    }))
  }
  resubmit(index) {
    const updatedTodos = [...this.state.todos]
    updatedTodos.splice(index, 1, this.state.editingVal)
    this.setState((state) => ({
      ...state,
      editingIndex: null,
      todos: updatedTodos,
    }))
  }

  render() {
    return (
      <section>
        <Count count={this.state.todos.length}></Count>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {this.state.editingIndex == index ? (
                <form>
                  <input
                    type="text"
                    defaultValue={this.state.editingVal}
                    onChange={this.handleEdit}
                    autoFocus={true}
                  ></input>
                  <div style={{ display: "inline" }}>
                    <button
                      style={{ marginLeft: "20px" }}
                      onClick={() => this.resubmit(index)}
                    >
                      Resubmit
                    </button>
                    <button
                      style={{ marginLeft: "20px" }}
                      onClick={() => this.delete(index)}
                    >
                      delete
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <p style={{ display: "inline" }}>{todo}</p>
                  <div style={{ display: "inline" }}>
                    <button
                      style={{ marginLeft: "20px" }}
                      onClick={() => this.editMode(index)}
                    >
                      Edit
                    </button>
                    <button
                      style={{ marginLeft: "20px" }}
                      onClick={() => this.delete(index)}
                    >
                      delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    )
  }
}

export default ClassInput
