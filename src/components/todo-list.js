import React from 'react'
import _ from 'lodash'
import TodoListHeader from 'components/todo-list-header'
import TodoListItem from 'components/todo-list-item'

class TodoList extends React.Component {

    renderItem(){
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => {
            return <TodoListItem key={index} {...todo} {...props} />
        })
    }

    render() {
        return (
            <table className="table table-striped">
                <TodoListHeader />
                <tbody>
                    {this.renderItem()}
                </tbody>
            </table>
        )
    }
}

export default TodoList;
