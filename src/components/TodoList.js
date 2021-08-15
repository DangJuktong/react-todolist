import React, { Component } from 'react';

class TodoList extends Component {

    render () {

        const { todoList, setCompleted, removeTodoItem } = this.props;

        return (
            <ul>
                {
                    todoList.map((item, index) => {
                        return (
                            <li key={ index }>
                                <input
                                    type="checkbox"
                                    checked={ item.completed }
                                    onChange={ () => setCompleted(item.id) }
                                />
                                <span
                                    style={ { textDecoration: item.completed ? 'line-through' : 'none'} }
                                >{ item.content }</span>
                                <button
                                    onClick={ () => removeTodoItem(item.id) }
                                >删除</button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default TodoList;