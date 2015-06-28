import React from 'react';
import styles from './entry.scss';
import CommentBox from './comment-box.jsx';

React.render(
  <CommentBox url="/data.json"
    pollInterval="1000"/>,
  document.getElementById('content'));
