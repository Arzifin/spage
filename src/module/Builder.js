import * as React from 'react';
import ImageCardTemplate from './ImageCardTemplate';
import ImageCardInfo from './ImageCardInfo';
import CardContact from './CardContact';
import data from './data';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, IconButton, } from '@mui/material';
import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller } from 'react-scroll';
import './Builder.css';
import Header from './Header';


const handleClick = (id) => {
    if (id === 'infoon') {
        scroller.scrollTo('info-kortti', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    }

}

function Builder() {
    return (
        <Box
            id="uloinLaatikko"
            sx={{
                //minHeight: '100vh',
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                flexWrap: 'wrap',

            }}
        >
            <Header />
            <Box
                sx={{
                    margin: 0,
                    textAlign: 'center',
                    width: '100%',
                    height: '100vh',
                    paddingTop: '20vh',
                }}
            >
                <Box
                    id="koti"
                >
                    <div
                        id="otsikko"
                        style={{
                            marginBottom: 0,
                        }}
                    >
                        Header
                    </div>
                    <div
                        id="alaOtsikko"
                        style={{
                            marginBottom: '5vh',
                        }}
                    >
                        - X.X.XXXX -
                    </div>
                </Box>
                <IconButton
                    onClick={() => handleClick("infoon")}
                >
                    <KeyboardArrowDownIcon
                        id="infoon"
                        //className={styling.down}
                        style={{
                            color: '#fff',
                            fontSize: '5rem',
                        }}
                    />
                </IconButton>
            </Box>
            <div
                id="info-kortti"
                style={{
                    //marginTop: 0,
                    marginBottom: '15vh',

                }}
            >
                <ImageCardInfo
                    para={data[0]}
                    style={{
                        margin: 0,
                    }}
                />
            </div>
            <div
                id="ilmo-kortti"
                style={{ //marginBottom: '15vh', 
                    marginBottom: '15vh',
                    //paddingTop: '10vh',
                }}
            >

                <ImageCardTemplate
                    para={data[1]}
                    style={{
                        margin: 0,
                    }}

                />
            </div>
            <div
                id="kpp-kortti"
                style={{
                    marginBottom: '15vh',
                }}
            >
                <ImageCardTemplate
                    para={data[2]}
                    style={{
                        margin: 0,
                    }}
                />
            </div>
            <div
                id="majo-kortti"
                style={{
                    marginBottom: '15vh',
                }}
            >
                <ImageCardTemplate
                    para={data[3]}
                    style={{
                        margin: 0,
                    }}
                />
            </div>
            <div
                id="valo-kortti"
                style={{
                    paddingBottom: '15vh',
                }}
            >
                <ImageCardTemplate
                    para={data[4]}
                    style={{
                        margin: 0,
                    }}
                />
            </div>

            <div
                id="tied-kortti"
                style={{
                    paddingBottom: '15vh',
                }}
            >
                <ImageCardTemplate
                    para={data[5]}
                    style={{
                        margin: 0,
                    }}
                />
            </div>
            <div
                id="yhteys-kortti"
                style={{
                    paddingBottom: '15vh',
                }}
            >
                <CardContact
                    para={data[5]}
                    style={{
                        margin: 0,
                    }}
                />
            </div>
        </Box>
    )
}
export default Builder;