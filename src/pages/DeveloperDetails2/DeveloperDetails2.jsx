import "./DeveloperDetails2.css"
//import "./OfferDetailsDescription.css"
//import './OfferDetailsComments.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserById } from "../../services/API_proyect/user.service";
import { useTheme, Divider, Avatar, Grid, Paper, TextField, Button } from '@mui/material';
import {
    createComment,
    getByReference,
} from '../../services/API_proyect/comment.service';
import { getByUserExperience } from "../../services/API_proyect/experience.service";
import Comments from '../../components/Comments/Comments';
import ReadOnlyDeveloperRating from "../../components/ratings/ReadOnlyUserRating/ReadOnlyUserRating";
import WriteRatingForDeveloper from "../../components/ratings/WriteRatingForDeveloper/WriteRatingForDeveloper"
import { FaMapMarker } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { BsCalendarDay } from 'react-icons/bs';
import { technologies } from '../../data/object.tecnologias';
import { MdEmail } from "react-icons/md";
import { MdPersonAdd, MdGroupAdd } from "react-icons/md";
import { MdPeople, MdPerson } from "react-icons/md";

const DeveloperDetails2 = () => {
    const [res, setRes] = useState({});
    const [resComment, setResComment] = useState({});
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState(null);
    const [developer, setDeveloper] = useState(null);
    const [comments, setComments] = useState(null);
    const [experiences, setExperiences] = useState(null);
    const theme = useTheme();
    const { state } = useLocation();
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

    const getComments = async () => {
        const dataComments = await getByReference('User', id);

        const filterData = dataComments.data.filter(
            (singleCommets) => singleCommets.commentType == 'Publico',
        );
        setComments(await filterData);
    };

    const getExperiences = async () => {
        const dataExperiences = await getByUserExperience(id);

        setExperiences(await dataExperiences);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (res.status == 200) {
            setDeveloper(res.data);
        }

        //console.log("DEveloperDetails2 -> res.data: ", res.data)

        // TODO: swal alert in case of error !!!!
    }, [res]);

    useEffect(() => {
        if (developer != null) {
            getComments();
            getExperiences()
        }
    }, [developer]);

    useEffect(() => {
        if (res.status == 200) {
            getComments();
        }

        // TODO: swal alert in case of error !!!!
    }, [resComment]);


    //return developer ? developerLayout(developer) : null

    return (
        <div className="developerDetails2-container">
            <div className="developerDetails2-image-and-info-container">
                <img className="developerDetails2-image" src={developer?.image} alt="imagen developer"></img>
                <div className="developerDetails2-info-container">
                    <div className="developerDetails2-name-surname-and-developerType">
                        <div className="developerDetails2-name-surname">
                            {developer?.name} {developer?.surname}
                        </div>
                        <div className="developerDetails2-developerType">
                            {/* For now,  all developer are freelancers, could be better: Java developer, ...*/}
                            Freelancer
                        </div>
                    </div>
                    <div className="developerDetails2-read-ratings">
                        {developer && <ReadOnlyDeveloperRating user={developer} />} ({developer?.ratingsByOthers.length})
                    </div>
                    <div className="developerDetails2-info-city-email-following-followers">
                        <div className="developerDetails2-info-city">
                            <p>Localización</p>
                            <div className="developerDetails2-info-developer-detail">
                                <FaMapMarker /> {developer?.city}
                            </div>

                        </div>
                        <div className="developerDetails2-info-email">
                            <p>Email</p>
                            <div className="developerDetails2-info-developer-detail">
                                <MdEmail /> {developer?.email}
                            </div>

                        </div>
                        <div className="developerDetails2-info-following">
                            <p>Following</p>
                            <div className="developerDetails2-info-developer-detail">
                                <MdGroupAdd /> ({developer?.following.length})
                            </div>

                        </div>
                        <div className="developerDetails2-info-followers">
                            <p>Followers</p>
                            <div className="developerDetails2-info-developer-detail">
                                <MdPeople /> ({developer?.followers.length})
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="developerDetails2-horizontal-line"></div> */}
            <div className="developerDetails2-developer-rating-writeRating-container">
                <p>Danos tú valoración</p>
                {developer && <WriteRatingForDeveloper userToRate={developer} />}
            </div>

            <div className="developerDetails2-city-languages-technologies">
                <div className="developerDetails2-city-languages">
                    <h3>Localización e idiomas</h3>
                    <div className="developerDetails2-city-languages-without-title">
                        <div className="developerDetails2-city-localization">
                            <h5><FaMapMarker /> Localización</h5>
                            <div className="developerDetails2-info-city-languages">
                                {developer?.city}
                            </div>
                        </div>
                        <div className="developerDetails2-languages">
                            <h5><FaLaptopCode /> Idiomas</h5>
                            <div className="developerDetails2-info-city-languages">
                                Ingles Frances
                            </div>
                        </div>
                    </div>
                </div>
                <div className="developerDetails2-technologies">
                    <h3>Habilidades profesionales</h3>

                    <div className="developerDetails2-info-technologies">
                        <h5><BiCodeAlt /> Tecnologías</h5>
                        <div className="developerDetails2-info-technology">

                            {/* //------------------------ Show Developer's Tecnologies -------------------- */}
                            <div className="developerDetails2-icons-technologies-container">
                                {technologies
                                    .filter(tech => developer?.technologies.includes(tech.name))
                                    .map((tech, index) => (
                                        <figure key={`${tech.name}_${index}`} className="developerDetails2-tecnologia-item" id={tech.name}>
                                            <div className="developerDetails2-icon-container">
                                                <img className="developerDetails2-tech-image" src={tech.image} alt={tech.name} />
                                                <p>{tech.name}</p>
                                            </div>
                                        </figure>
                                    ))}
                            </div>
                            {/* //------------------------ Show Developer's Tecnologies -------------------- */}

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="developerDetails2-horizontal-line"></div> */}
            {/* <div
                className="developerDetails2-offer-description"
                dangerouslySetInnerHTML={{ __html: offer?.description }}
                
            /> */}

            <div className="developerDetails2-developer-description" >
                <h3>Descripción</h3>
                <p>{developer?.description}</p>
            </div>

            {/* <div className="developerDetails2-horizontal-line"></div> */}

            {/* ------------------- Developer job experiences ---------------------*/}

            <div className='developerDetails2-experiences-container'>
                <h3>Experiecias</h3>
                {experiences != null &&
                    experiences.map((singleExperience) => (
                        <div
                            className="developerDetails2-single-experience-container"
                            key={singleExperience._id}
                        >
                            <h3>Projecto/Empresa</h3>
                            <p>{singleExperience.workedWith}</p>
                            <h3>Descripción</h3>
                            <p>{singleExperience.description}</p>
                            <h3>Tecnologías</h3>
                            <p>{singleExperience.technologies}</p>
                            <h3>Duración</h3>
                            <p>{singleExperience.duration} año/s</p>
                        </div>
                    ))}
            </div>

            {/* ------------------- Developer job experiences ---------------------*/}

            {/* -------------------COMMENTS ----------------------------- */}
            <div style={{ padding: 0 }} className="developerDetails2-comments-container">

                <Paper
                    style={{
                        padding: '40px 20px',
                        backgroundColor: '#fcfcfc',
                        border: '0px solid red',
                        width: '100%',
                    }}
                >
                    <h3>Manda un comentario!</h3>
                    <Grid
                        container
                        wrap="nowrap"
                        spacing={2}
                    >
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={developer?.image} />
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
                                sx={{
                                    border: "none",
                                    borderRadius: "30px",
                                    height: "39px",
                                    width: "270px",
                                    [theme.breakpoints.down('sm')]: {
                                        width: "120px"
                                    },
                                    backgroundColor: "#25d366",
                                    color: "white",
                                    fontSize: "16px",
                                    transition: "linear .2s",
                                    marginTop: "30px",
                                    ":hover": {
                                        borderBottom: "1.5px solid #25d366",
                                        backgroundColor: "rgb(250, 250, 250)",
                                        color: "#25d366",
                                        fontSize: "18px",
                                        cursor: "pointer"
                                    }
                                }}
                                onClick={() => handleComment()}
                                disabled={loading}
                            >
                                Enviar
                            </Button>

                        </Grid>
                    </Grid>
                    <Divider variant="fullWidth" style={{ margin: '30px 0' }} />
                    {/* <div className='Dev-comments' style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        {comments != null &&
                            comments.map((singleComment) => (
                                <Comments
                                    key={singleComment._id}
                                    comment={singleComment}
                                    setComentsByChild={setComments}
                                />
                            ))}
                    </div> */}
                </Paper>
            </div>
            {/* ------------------ COMMENTS ------------------------------- */}
        </div>
    );
}

export default DeveloperDetails2