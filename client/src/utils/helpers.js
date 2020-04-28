export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatMessage(message, author, authedUser, parentMessage) {
  const { id, likes, replies, text, timestamp } = message;
  const { name } = author;

  return {
    name,
    id,
    timestamp,
    text,
    likes: likes.length,
    replies: replies.length,
    hasLiked: likes.includes(authedUser),
    parent: !parentMessage
      ? null
      : {
          author: parentMessage.author,
          id: parentMessage.id,
        },
  };
}
