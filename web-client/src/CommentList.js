import React from "react";

const CommentList = ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    switch (comment.status) {
      case "pending":
        content = "This comment is awaiting moderation";
        break;
      case "approved":
        content = comment.content;
        break;
      case "rejected":
        content = "This comment has been rejected";
        break;
    }

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
