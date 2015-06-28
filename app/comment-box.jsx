import React from 'react';
import $ from 'jquery';
import CommentList from './comment-list.jsx';
import CommentForm from './comment-form.jsx';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};

    this._loadCommentsFromServer = this._loadCommentsFromServer.bind(this);
    this._handleCommentSubmit = this._handleCommentSubmit.bind(this);
  }

  componentDidMount () {
    this._loadCommentsFromServer();
    setInterval(this._loadCommentsFromServer, this.props.pollInterval);
  }

  render () {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data}/>
        <CommentForm onCommentSubmit={this._handleCommentSubmit}/>
      </div>
    );
  }

  _loadCommentsFromServer () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: data => this.setState({ data: data }),
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }

  _handleCommentSubmit (comment) {
    this.setState({
      data: this.state.data.concat(comment)
    });

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: (data) => this.setState({data: data}),
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString());
      }
    });
  }
};
