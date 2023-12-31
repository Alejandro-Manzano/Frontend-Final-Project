import React, { useEffect, useState } from 'react';
import { getByReference } from '../../services/API_proyect/comment.service';
import { useAuth } from '../../contexts/authContext';
import { getUserById } from '../../services/API_proyect/user.service';

const PrivateComment = () => {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await getUserById(user._id);

      if (response.status === 200) {
        console.log(response.data);
      }
    };
    fetchComments();
  }, [user._id]);

  return (
    <div>
      {/* {comments.map((comment) => (
        <p key={comment._id}>{comment.commentContent}</p>
      ))} */}
      <p>hola</p>
    </div>
  );
};

export default PrivateComment;
