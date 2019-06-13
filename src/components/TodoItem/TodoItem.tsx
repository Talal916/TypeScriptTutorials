import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

import { Todo } from '../../models/Todo';

export interface Props {
  todo: Todo;
  toggleTodo(todoId: number): void;
  deleteTodo(todoId: number): void;
  
}

export default class TodoItem extends Component<Props> {
  renderItemText()
  {
    const { todo } = this.props
    return todo.isCompleted
            ? <span style={{ textDecoration: 'line-through' }}>{todo.text}</span>
            : todo.text 
              
            
  }
  render() {
    const { todo, toggleTodo, deleteTodo } = this.props;
    return (
      <ListItem key={todo.id}>
        <ListItemIcon>
          <Checkbox
            edge='start'
            checked={todo.isCompleted}
            onChange={() => toggleTodo(todo.id)}
          />
        </ListItemIcon>
        <ListItemText>
            {this.renderItemText()}
          </ListItemText>
        <ListItemSecondaryAction>
          <IconButton edge='end' onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}
