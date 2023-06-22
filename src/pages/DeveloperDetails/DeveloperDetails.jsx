import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserById } from '../../services/API_proyect/user.service';
import { Divider, Avatar, Grid, Paper, TextField, Button } from '@mui/material';
import {
  createComment,
  getAll,
  deleteComment,
  getByReference,
  toggleFavoriteComment,
} from '../../services/API_proyect/comment.service';
import Comments from '../../components/Comments/Comments';

const DeveloperDetails = () => {
  const { state } = useLocation();
  const [res, setRes] = useState({});
  const [resComment, setResComment] = useState({});
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState(null);
  const [developer, setDeveloper] = useState(null);
  const [comments, setComments] = useState(null);
  const { id } = state;

  const imgLink =
    'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800';

  const getData = async () => {
    setLoading(true);
    setRes(await getUserById(id));
    setLoading(false);
  };

  const handleComment = async () => {
    const customFormData = {
      commentContent: inputValue,
      commentType: 'Publico',
      referenceUser: id,
    };
    setLoading(true);
    setResComment(await createComment(customFormData));
    setLoading(false);
  };

  const getComment = async () => {
    const dataComments = await getByReference('User', id);

    const filterData = dataComments.data.filter(
      (singleCommets) => singleCommets.commentType == 'Publico',
    );
    setComments(await filterData);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (res.status == 200) {
      setDeveloper(res.data);
    }
  }, [res]);

  useEffect(() => {
    if (developer != null) {
      getComment();
    }
  }, [developer]);

  useEffect(() => {
    console.log(res);
    if (res.status == 200) {
      getComment();
    }
  }, [resComment]);

  return (
    <div>
      <div style={{ padding: 14 }} className="App">
        <h1>Comments</h1>
        <Paper style={{ padding: '40px 20px' }}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar alt="Remy Sharp" src={imgLink} />
            </Grid>
            <Grid justifyContent="left" item xs zeroMinWidth>
              <TextField
                id="newComent"
                label="Pon tu comentario"
                variant="outlined"
                style={{ width: '100%' }}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ margin: 1 }}
                onClick={() => handleComment()}
                disabled={loading}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
          <Divider variant="fullWidth" style={{ margin: '30px 0' }} />
          <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {comments != null &&
              comments.map((singleComment) => (
                <Comments
                  key={singleComment._id}
                  comment={singleComment}
                  setComentsByChild={setComments}
                />
              ))}
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default DeveloperDetails;
