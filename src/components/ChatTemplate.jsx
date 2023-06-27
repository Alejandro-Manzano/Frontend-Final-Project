import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/authContext';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBTypography,
  MDBTextArea,
  MDBCardHeader,
} from 'mdb-react-ui-kit';
import { getUserById } from '../services/API_proyect/user.service';

export const Chat = () => {
  const [resChatUser, setResChatUser] = useState({});
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userChat = await getUserById(user._id);
        if (userChat) {
          setResChatUser(userChat);
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (resChatUser?.status == 200) setChats(resChatUser.data.chats);
  }, [resChatUser]);

  useEffect(() => {
    console.log(chats);
  }, [chats]);

  useEffect(() => {
    console.log(message);
  }, [message]);

  return (
    <div>
      <MDBContainer fluid className="py-5" style={{ minHeight: '700px' }}>
        <MDBRow>
          <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
            <h5 className="font-weight-bold mb-3 text-center text-lg-start">Member</h5>

            {chats.map((chat) => (
              <MDBCard
                onClick={() => {
                  setMessage(chat.menssages);
                }}
              >
                <MDBCardBody>
                  <MDBTypography listUnStyled className="mb-0">
                    <li className="p-2 border-bottom" style={{ backgroundColor: '#eee' }}>
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src={
                              user?._id == chat?.userOne?._id
                                ? chat?.userTwo?.image
                                : chat?.userOne?.image
                            }
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                            style={{ objectFit: 'cover', width: '50px', height: '50px' }}
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">
                              {user?._id == chat?.userOne?._id
                                ? chat?.userTwo?.name
                                : chat?.userOne?.name}
                            </p>
                            <p className="small text-muted">
                              {user?._id == chat?.userOne?._id
                                ? chat?.userTwo?.surname
                                : chat?.userOne?.surname}
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </MDBTypography>
                </MDBCardBody>
              </MDBCard>
            ))}
          </MDBCol>

          <MDBCol md="6" lg="7" xl="8">
            <MDBTypography listUnStyled>
              <div style={{ height: '450px', overflow: 'auto', padding: '2rem' }}>
                {message.map(
                  (mss) => console.log(mss),
                  // <li className="d-flex justify-content-between mb-4">
                  //   <img
                  //     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                  //     alt="avatar"
                  //     className="rounded-circle d-flex align-self-start me-3 shadow-1-strong"
                  //     width="60"
                  //   />
                  //   <MDBCard>
                  //     <MDBCardHeader className="d-flex justify-content-between p-3">
                  //       <p className="fw-bold mb-0">Brad Pitt</p>
                  //       <p className="text-muted small mb-0">
                  //         <MDBIcon far icon="clock" /> 12 mins ago
                  //       </p>
                  //     </MDBCardHeader>
                  //     <MDBCardBody>
                  //       <p className="mb-0">
                  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  //         eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  //       </p>
                  //     </MDBCardBody>
                  //   </MDBCard>
                  // </li>
                )}
              </div>

              <li className="bg-white mb-3">
                <MDBTextArea
                  id="textAreaExample"
                  rows={4}
                  style={{ marginTop: '2rem' }}
                />
              </li>
              <MDBBtn color="info" rounded className="float-end">
                Send
              </MDBBtn>
            </MDBTypography>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
