import React from 'react';

export default class CommentForm extends React.Component {
  constructor (props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  render () {
    return (
      <form className="commentForm" onSubmit={this._handleSubmit}>
        <input type="text" placeholder="Your name" ref="author"/>
        <input type="text" placeholder="Say something..." ref="text"/>
        <input type="submit" value="Post"/>
      </form>
    );
  }

  _handleSubmit (e) {
    var authorDOM = React.findDOMNode(this.refs.author);
    var textDOM = React.findDOMNode(this.refs.text);
    var author = authorDOM.value.trim();
    var text = textDOM.value.trim();

    e.preventDefault();

    if (!text || !author) {
      return;
    }

    authorDOM.value = '';
    textDOM.value = '';
    this.props.onCommentSubmit({ author: author, text: text });
  }
};
