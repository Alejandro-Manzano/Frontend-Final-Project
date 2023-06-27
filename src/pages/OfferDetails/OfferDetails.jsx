import "./OfferDetails.css"
import "./OfferDetailsDescription.css"
import './OfferDetailsComments.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOfferById } from "../../services/API_proyect/offer.service";
import { useTheme, Divider, Avatar, Grid, Paper, TextField, Button } from '@mui/material';
import {
    createComment,
    getByReference,
} from '../../services/API_proyect/comment.service';
import Comments from '../../components/Comments/Comments';
import ReadOnlyOfferRating from "../../components/ratings/ReadOnlyOfferRating/ReadOnlyOfferRating";
import WriteRatingForOffer from "../../components/ratings/WriteRatingForOffer/WriteRatingForOffer";
import { FaMapMarker } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { BsCalendarDay } from 'react-icons/bs';
import { technologies } from '../../data/object.tecnologias';

const OfferDetails = () => {
    const [res, setRes] = useState({});
    const [resComment, setResComment] = useState({});
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState(null);
    const [offer, setOffer] = useState(null);
    const [comments, setComments] = useState(null);
    const theme = useTheme();
    const { state } = useLocation();
    const { id } = state;

    const imgLink =
        'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800';

    const getData = async () => {
        setLoading(true);
        setRes(await getOfferById(id));
        setLoading(false);
    };

    const handleComment = async () => {
        const customFormData = {
            commentContent: inputValue,
            commentType: 'Publico',
            referenceOfferComment: id,
        };
        setLoading(true);
        setResComment(await createComment(customFormData));
        setLoading(false);
    };

    const getComments = async () => {
        const dataComments = await getByReference('Offer', id);

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
            setOffer(res.data);
        }

        //console.log("OfferDetails -> res.data: ", res.data)

        // TODO: swal alert in case of error !!!!
    }, [res]);

    useEffect(() => {
        if (offer != null) {
            getComments();
        }
    }, [offer]);

    useEffect(() => {
        if (res.status == 200) {
            getComments();
        }

        // TODO: swal alert in case of error !!!!
    }, [resComment]);


    //return offer ? offerLayout(offer) : null

    return (
        <div className="offerDetails-container">
            <div className="offerDetails-image-and-info-container">
                <img className="offerDetails-image" src={offer?.image} alt="imagen oferta"></img>
                <div className="offerDetails-info-container">
                    <div className="offerDetails-title-and-state">
                        <div className="offerDetails-title">
                            {offer?.offerTitle}
                        </div>
                        <div className="offerDetails-offerState">
                            {offer?.offerState}
                        </div>
                    </div>
                    <div className="offerDetails-read-ratings">
                        {offer && <ReadOnlyOfferRating offer={offer} />} ({offer?.ratings.length})
                    </div>
                    <div className="offerDetails-info-city-salary-jobtype-expYears">
                        <div className="offerDetails-info-city">
                            <p>Localización</p>
                            <div className="offerDetails-info-offer-detail">
                                <FaMapMarker /> {offer?.city}
                            </div>

                        </div>
                        <div className="offerDetails-info-annualSalary">
                            <p>Salario anual</p>
                            <div className="offerDetails-info-offer-detail">
                                (&euro;) {offer?.annualSalary}
                            </div>

                        </div>
                        <div className="offerDetails-info-jobType">
                            <p>Tipo de trabajo</p>
                            <div className="offerDetails-info-offer-detail">
                                <FaLaptopCode /> {offer?.jobType}
                            </div>

                        </div>
                        <div className="offerDetails-info-experienceYears">
                            <p>Experiencia</p>
                            <div className="offerDetails-info-offer-detail">
                                <BsCalendarDay /> {offer?.experienceYears} año/s
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="offerDetails-horizontal-line"></div> */}
            <div className="offerDetails-offer-rating-writeRating-container">
                <p>Valora esta oferta</p>
                {offer && <WriteRatingForOffer offerToRate={offer} />}
            </div>
            <div className="offerDetails-city-jobType-technologies">
                <div className="offerDetails-city-jobType">
                    <h3>Localización y desplazamiento</h3>
                    <div className="offerDetails-city-jobType-without-title">
                        <div className="offerDetails-city-localization">
                            <h5><FaMapMarker /> Localización</h5>
                            <div className="offerDetails-info-city-jobType">
                                {offer?.city}
                            </div>
                        </div>
                        <div className="offerDetails-jobType">
                            <h5><FaLaptopCode /> Trabajo a distancia/presencial</h5>
                            <div className="offerDetails-info-city-jobType">
                                {offer?.jobType}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offerDetails-technologies">
                    <h3>Habilidades profesionales</h3>

                    <div className="offerDetails-info-technologies">
                        <h5><BiCodeAlt /> Tecnologías</h5>
                        <div className="offerDetails-info-technology">
                            {/* {offer && showTechnologies(offer.technologies, technologies)} */}

                            {/* //------------------------ Show Offer Tecnologies -------------------- */}
                            <div className="offerDetails-icons-technologies-container">
                                {technologies
                                    .filter(tech => offer?.technologies.includes(tech.name))
                                    .map((tech, index) => (
                                        <figure key={`${tech.name}_${index}`} className="offerDetails-tecnologia-item" id={tech.name}>
                                            <div className="offerDetails-icon-container">
                                                <img className="offerDetails-tech-image" src={tech.image} alt={tech.name} />
                                                <p>{tech.name}</p>
                                            </div>
                                        </figure>
                                    ))}
                            </div>
                            {/* //------------------------ Show Offer Tecnologies -------------------- */}

                        </div>
                    </div>
                </div>
            </div>
            <div className="offerDetails-horizontal-line"></div>
            {/* <div
                className="offerDetails-offer-description"
                dangerouslySetInnerHTML={{ __html: offer?.description }}
                
            /> */}

            <div className="offerDetails-offer-description" >
                <h3>Descripción</h3>
                <p>{offer?.descriptionGeneral}</p>
                <h3>Responsabilidades</h3>
                <p>{offer?.descriptionResponsabilities}</p>
                <h3>Requisitos</h3>
                <p>{offer?.descriptionRequires}</p>
                <h3>Remunaración</h3>
                <p>{offer?.descriptionSalary}</p>
            </div>

            <div className="offerDetails-horizontal-line"></div>

            {/* -------------------COMMENTS ----------------------------- */}
            <div style={{ padding: 14 }} className="offerDetails-comments-container">

                <Paper
                    style={{ padding: '40px 20px', backgroundColor: '#fcfcfc' }}>
                    <h3>Comenta la oferta!</h3>
                    <Grid
                        container
                        wrap="nowrap"
                        spacing={2}
                    >
                        <Grid item>
                            <Avatar alt="Remy Sharp" src={offer?.image} />
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
                    <div className='Dev-comments' style={{ maxHeight: '400px', overflowY: 'auto' }}>
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
            {/* ------------------ COMMENTS ------------------------------- */}
        </div>
    );
}

// const showTechnologies = (offerTechnologies, technologies) => {
//     console.log("showTechnologies -> offerTechnologies: ", offerTechnologies)
//     console.log("showTechnologies -> technologies: ", technologies)
//     return (<div className="offerDetails-icons-technologies-container">
//         {technologies
//             .filter(tech => offerTechnologies.includes(tech.name))
//             .map((tech, index) => (
//                 <figure key={`${tech.name}_${index}`} className="offerDetails-tecnologia-item" id={tech.name}>
//                     <div className="offerDetails-icon-container">
//                         <img className="offerDetails-tech-image" src={tech.image} alt={tech.name} />
//                         <p>{tech.name}</p>
//                     </div>

//                 </figure>
//             ))}
//     </div>
//     )
// }





export default OfferDetails