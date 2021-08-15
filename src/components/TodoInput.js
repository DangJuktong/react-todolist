import React, { Component } from 'react';

class TodoInput extends Component {

    state = {
        todoValue: ''
    }

    setTodoValue (e) {
        this.setState({
            todoValue: e.target.value
        });
    }

    addTodo () {
        const _val = this.state.todoValue.trim(),
              { addTodoItem } = this.props;
        
        if(_val.length === 0) {
            return;
        }

        addTodoItem({
            id: new Date().getTime(),
            content: _val,
            completed: false
        });

        this.setState({
            todoValue: ''
        });


    }

    render () {
        const { todoValue } = this.state;

        return (
            <div>
                <input 
                    type="text"
                    // 有传入值用箭头函数，无传入值用bind
                    onChange = { (e) => this.setTodoValue(e) }
                    value = { todoValue }
                />
                <button
                    onClick = { this.addTodo.bind(this) }
                >
                    增加
                </button>
            </div>
        )
    }
}

export default TodoInput;