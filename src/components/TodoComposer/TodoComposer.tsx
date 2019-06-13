import React, { Component, KeyboardEvent } from 'react';
import TextField from '@material-ui/core/TextField';

export interface Props {
  draft: string;
  changeDraft(draft: string): void;
  createTodo(): void;
}

export default class TodoComposer extends Component<Props> {
  createTodo(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter' && this.props.draft !== '') {
      this.props.createTodo();
    }
  }

  render() {
    const { draft, changeDraft } = this.props;
    return (
      <TextField
        id='outlined-bare'
        placeholder='Write a todo...'
        variant='outlined'
        fullWidth
        value={draft}
        onChange={(event) => changeDraft(event.target.value)}
        onKeyPress={(event) => this.createTodo(event)}
      />
    );
  }
}
