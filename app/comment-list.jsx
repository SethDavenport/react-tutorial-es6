import React from 'react';
import Comment from './comment.jsx';

export default class CommentList extends React.Component {
  render () {
    var i=0;
    var comments = this.props.data.map(function (record) {
      return (
        <Comment author={record.author} key={i++}>{record.text}</Comment>
      );
    });

    return (
      <div className="commentList">{comments}</div>
    );
  }
};
