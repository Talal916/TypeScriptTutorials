import React, { Component } from 'react';
import List from '@material-ui/core/List';

import TodoItem from '../TodoItem/TodoItem';
import { Todo } from '../../models/Todo';

export interface Props {
  todos: Todo[];
  toggleTodo(todoId: number): void;
  deleteTodo(todoId: number): void;
  currentTab: number;
}

export interface State {
  filteredTodos: Todo[];
}

export default class TodoList extends Component<Props, State> {



  filterTodos() {

      if(this.props.currentTab === 2){
        return this.props.todos.filter((todo) => todo.isCompleted === false)
      } else if (this.props.currentTab === 1){
        return this.props.todos.filter((todo) => todo.isCompleted === true)
      }
      else
        return this.props.todos;
      


  }
  render() {
    return (
      <List>
        {this.filterTodos().map((todo) =>
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={this.props.toggleTodo}
            deleteTodo={this.props.deleteTodo}
          />
        )}
      </List>
    );
  }
}
