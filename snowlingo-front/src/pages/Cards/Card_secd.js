import React from "react";
import './Card_init.css'
import snow from '../../snowlingo.svg';
import card_g from './card_g.svg';
import ski_icon from './pics/board_icon.svg';
import jump_1 from './pics/jump_1.svg';
import balance from './pics/balance.svg';
import map from './pics/map.svg';
import { NavLink } from 'react-router-dom';
// import { Box, Grid, Paper, TextField, Button } from '@mui/material';
import { Box, Button} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Scrollbar } from 'swiper/modules';
// import 'swiper/swiper.min.css';
import 'swiper/css';
// import 'swiper/components/effect-coverflow/effect-coverflow.min.css';
import 'swiper/css/effect-coverflow';
// import 'swiper/pagination/pagination.min.css';
import 'swiper/css/pagination';
// import 'swiper/navigation/navigation.min.css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Card1 = () => {

    return (
        <Box
        sx={{
            // margin: '5% 5%',
            // display: 'flex'
          }}
        >
            <Box
            sx={{
                margin: '5% 5%',
                display: 'flex'
              }}
            >
                <NavLink to="/home" style={{ textDecoration: 'none' }}>
                <ArrowBackIosNewIcon sx={{ marginRight: 1, color: 'white', fontSize:"2.8rem", marginTop: "2rem"}} /> {/* Add some right margin to the icon */}
                </NavLink>
                <img id="login-snow" src={snow} alt="logo" style={{ marginTop: "0.5rem", marginBottom: "1.5rem", marginLeft:"5.5rem" }}></img>
            </Box>

            <img id="ski-icon" src={ski_icon} alt="logo" style={{ marginTop: "0.2rem", marginBottom: "0.5rem", marginLeft:"10.5rem" }}></img>
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
                "rotate": 50,
                "stretch": 0,
                "depth": 100,
                "modifier": 1,
                "slideShadows": true,
            }}
            pagination={{clickable:true,
                        // type: 'fraction',
                        // marginTop:'50px',
                        // bottom: '10px',
                        // el: '.swiper-pagination',
                        }}
            Navigation={true}
            scrollbar={{ draggable: true }}
            modules={[EffectCoverflow, Pagination, Navigation, Scrollbar]}
            className="my-swiper"
            style={{
                // width: '100%', // Ensure Swiper takes up the full width
                // maxWidth: '600px', // Maximum width of the Swiper; adjust as needed
                // marginLeft: '0px', // Combined with marginRight: 'auto', this centers the Swiper
                // marginRight: 'auto',
                marginTop: '10px',
              }}
            >
                <SwiperSlide id="first_pic">
                    {/* Content of your first slide */}
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <img id="jump_1" src={jump_1} alt="logo"
                            style={{
                                position: 'absolute',
                                top: '35%', // Adjust this value to position `jump_1` as needed
                                left: '100%', // Adjust this value to position `jump_1` as needed
                                transform: 'translate(-50%, -50%)', // This centers the image on the container
                                width: '90%', // Adjust this value to set the size of the `jump_1`
                                height: 'auto',
                                zIndex: 2, // Ensure `jump_1` is above `card_backg`
                            }}
                        />
                        <Button color="primary" variant="contained" style={{ position: 'relative', bottom: '150px', left: '105px' }}>
                        JUMP
                        </Button>
                        <p
                        style={{
                            position: 'absolute',
                            top: '67%', // Adjust as needed to move the text up or down
                            left: '92%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            height: 'auto',
                            color: 'white',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >Train Focus&Agility</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Content of your first slide */}
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <img id="balance" src={balance} alt="logo"
                            style={{
                            // Set a specific size or use max values to constrain the size
                            // maxWidth: '350px', // Adjust this value as needed
                            // maxHeight: '350px', // Adjust this value as needed
                            // marginLeft: '5.5rem',
                                position: 'absolute',
                                top: '35%',
                                left: '100%',
                                transform: 'translate(-50%, -50%)',
                                width: '90%',
                                height: 'auto',
                                zIndex: 2,
                            }}
                        />
                        <Button color="primary" variant="contained" style={{ position: 'relative', bottom: '150px', left: '105px' }}>
                        ROTATE
                        </Button>
                        <p
                        style={{
                            position: 'absolute',
                            top: '67%', // Adjust as needed to move the text up or down
                            left: '92%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            height: 'auto',
                            color: 'white',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >Keep Body Balance</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Content of your first slide */}
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <Button color="primary" variant="contained" style={{ backgroundColor: 'white', color: 'black', position: 'relative', bottom: '300px', left: '50px', width: '180px' }}>
                        A: Ask for help
                        </Button>
                        <Button color='primary' variant="contained" style={{ backgroundColor: 'white', color: 'black', position: 'relative', bottom: '280px', left: '50px', width: '180px' }}>
                        B: Wait and rest
                        </Button>
                        <Button color="primary" variant="contained" style={{ backgroundColor: 'white', color: 'black', position: 'relative', bottom: '260px', left: '50px', width: '180px' }}>
                        C: Ignore and go
                        </Button>
                        <p
                        style={{
                            position: 'absolute',
                            top: '57%', // Adjust as needed to move the text up or down
                            left: '92%', // Center horizontally
                            transform: 'translate(-50%, -50%)',
                            width: '170px',
                            height: 'auto',
                            color: 'white',
                            zIndex: 3, // Make sure the text is above the image layers
                          }}
                        >When you hurt what should do?</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Content of your first slide */}
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <Button color="primary" variant="contained" style={{ backgroundColor: 'white', color: 'black', position: 'relative', bottom: '320px', left: '40px', width: '200px' }}>
                        <p
                        style={{
                            fontSize: '10px'
                        }}
                        >BlueMountain Resort (5.1mi)</p>
                            <Button style={{ backgroundColor: 'pink', color: 'black' }}>
                            More
                            </Button>
                        </Button>
                        <img id="map" src={map} alt="logo"
                            style={{
                            // Set a specific size or use max values to constrain the size
                            // maxWidth: '350px', // Adjust this value as needed
                            // maxHeight: '350px', // Adjust this value as needed
                            // marginLeft: '5.5rem',
                                position: 'absolute',
                                top: '38%',
                                left: '97%',
                                transform: 'translate(-50%, -50%)',
                                width: '55vw',
                                height: 'auto',
                                zIndex: 2,
                            }}
                        />
                        <Button color="primary" variant="contained" style={{ backgroundColor: 'white', color: 'black', position: 'relative', bottom: '200px', left: '40px', width: '200px', height: '50px' }}>
                        Go make 10 turns in mid level slope!
                        </Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Content of your first slide */}
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <Button color="primary" variant="contained" style={{ backgroundColor: 'white', color: 'black', position: 'relative', bottom: '310px', left: '40px', width: '200px' }}>
                        SEARCH
                        </Button>
                        <img id="map" src={map} alt="logo"
                            style={{
                            // Set a specific size or use max values to constrain the size
                            // maxWidth: '350px', // Adjust this value as needed
                            // maxHeight: '350px', // Adjust this value as needed
                            // marginLeft: '5.5rem',
                                position: 'absolute',
                                top: '38%',
                                left: '97%',
                                transform: 'translate(-50%, -50%)',
                                width: '55vw',
                                height: 'auto',
                                zIndex: 2,
                            }}
                        />
                        <Button color="primary" variant="contained" style={{ backgroundColor: 'white', color: 'black', position: 'relative', bottom: '180px', left: '40px', width: '200px', height: '50px' }}>
                        BlueMountain Resort
                        </Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* Content of your first slide */}
                    <div style={{ position: 'relative' }}>
                        <img id="card_backg" src={card_g} alt="logo" />
                        <Button color="primary" variant="contained" style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', position: 'relative', bottom: '280px', left: '50px', width: '180px', height: '30px' }}>
                        BlueMountain Resort (5.1 mi)
                        </Button>
                        <Button color='primary' variant="contained" style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', position: 'relative', bottom: '270px', left: '50px', width: '180px', height: '30px' }}>
                        Aspen Resort (111.1 mi)
                        </Button>
                        <Button color="primary" variant="contained" style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', position: 'relative', bottom: '260px', left: '50px', width: '180px', height: '30px' }}>
                        Killintong Resort (555.1 mi)
                        </Button>
                        <Button color="primary" variant="contained" style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', position: 'relative', bottom: '250px', left: '50px', width: '180px', height: '30px' }}>
                        FujiMountain Resort (1095.1 mi)
                        </Button>
                        <Button color='primary' variant="contained" style={{ fontSize: '10px', backgroundColor: 'white', color: 'black', position: 'relative', bottom: '240px', left: '50px', width: '180px', height: '30px' }}>

                        </Button>
                    </div>
                </SwiperSlide>
                {/* More SwiperSlides */}
            </Swiper>
        </Box>
    );
};

export default Card1;