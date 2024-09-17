import React from 'react';
import { Avatar, Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';

// Sample comments data
const comments = [
  {
    id: 1,
    user: "John Doe",
    avatar: "https://via.placeholder.com/150", // Avatar image
    comment: "This is an amazing post! Thank you for sharing.",
    date: "2024-09-14",
    reply: [
      {
        id: 5,
        user: "Jane Smith",
        avatar: "https://via.placeholder.com/150", // Avatar image
        comment: "Great insights, really enjoyed reading it.",
        date: "2024-09-15",
      },
      {
        id: 7,
        user: "Alice Johnson",
        avatar: "https://via.placeholder.com/150", // Avatar image
        comment: "Could you elaborate more on the last point?",
        date: "2024-09-16",
      },
    ],
  },
  {
    id: 2,
    user: "Jane Smith",
    avatar: "https://via.placeholder.com/150", // Avatar image
    comment: "Great insights, really enjoyed reading it.",
    date: "2024-09-15",
    reply: [], // Empty array for no replies
  },
  {
    id: 3,
    user: "Alice Johnson",
    avatar: "https://via.placeholder.com/150", // Avatar image
    comment: "Could you elaborate more on the last point?",
    date: "2024-09-16",
    reply: [], // Empty array for no replies
  },
];

const Comment = ({ commentData }) => (
  <Card variant="outlined" sx={{ mb: 2 }}>
    <CardContent>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar alt={commentData.user} src={commentData.avatar} />
        <Box ml={2}>
          <Typography variant="subtitle1" fontWeight="bold">
            {commentData.user}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {new Date(commentData.date).toLocaleDateString()}
          </Typography>
        </Box>
      </Box>
      <Typography variant="body1">{commentData.comment}</Typography>
    </CardContent>
    {commentData.reply && commentData.reply.length > 0 && (
      <Box sx={{ pl: 4, borderLeft: '2px solid #ccc', mt: 1 }}>
        {commentData.reply.map((reply) => (
          <Comment key={reply.id} commentData={reply} />
        ))}
      </Box>
    )}
  </Card>
);

const CommentsSection = () => {
  return (
    <Container maxWidth="ls" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Comments
      </Typography>
      <Grid container spacing={3}>
        {comments.map((comment) => (
          <Grid item xs={12} key={comment.id}>
            <Comment commentData={comment} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CommentsSection;
