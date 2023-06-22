import { Divider, Avatar, Grid, Paper, TextField, Button } from '@mui/material';
const Comments = ({ comment }) => {
  const { owner, commentContent, likes, createdAt } = comment;
  const { name, image } = owner;
  return (
    <>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={image} />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: 'left' }}>{name}</h4>
          <p style={{ textAlign: 'left' }}>{commentContent}</p>
          <p style={{ textAlign: 'left', color: 'gray' }}>{JSON.stringify(createdAt)}</p>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ margin: '30px 0' }} />
    </>
  );
};

export default Comments;