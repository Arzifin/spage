import * as React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography, Dialog,
DialogTitle, DialogContent, DialogContentText, DialogActions, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AlertDialog from './AlertDialog';

export default function ImageCardUpload({ para }) {
    let navigate = useNavigate();

    return (
        <Box
            
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: {
                        xs: '80vw',
                        sm: '80vw',
                        md: '90vw',
                        lg: '90vw',
                    },
                }}
            >


                <Card
                    sx={{
                        display: 'flex',
                        minWidth: '75vw',
                        
                       
                        flexDirection:
                        {
                            xs: 'column',
                            sm: 'column',
                            md: 'row-reverse',
                            lg: 'row-reverse'
                        },
                        width: {
                            xs: '75%',
                            sm: '75%',
                            md: '50%',
                            lg: '50%',
                        },
                        height: '100%',
                    }}
                >

                    <CardMedia
                        component="img"
                        sx={{
                            width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                            minHeight: '100%',
                            
                        }}
                        image={para.pic}
                        //title={para.pde}
                    />
                    <CardContent
                        sx={{
                            
                            display: 'flex',
                            flexDirection: 'column',
                            width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                            //height: { xs: '100%', sm: '100%', md: '100%', lg: '100%' },
                            
                            padding: 0,
                            margin: 0,
                            // Remove bottom padding
                            p: 0,
                            '&:last-child': { pb: 0 },
                        }}
                    >
                        <Typography
                            gutterBottom variant="h5"
                            component="h2"
                            sx={{
                                paddingLeft: 2,
                                paddingRight: 2,
                                paddingTop: 2,
                                fontSize:
                                {
                                    xs: '6.8vw',
                                    sm: '4.5vw',
                                    md: "2.8vw",
                                    lg: "2.95vw"
                                },
                            }}
                        >
                            {para.hea}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            sx={{
                                paddingLeft: 2,
                                paddingRight: 2,
                                margin: 0,
                                fontSize:
                                {
                                    xs: '5.0vw',
                                    sm: '2.8vw',
                                    md: "1.8vw",
                                    lg: "1.95vw"
                                },

                            }}
                        >
                            {para.tex1}
                        </Typography>
                        <Typography
                            variant="body2"
                            //color="textSecondary"
                            component="p"
                            sx={{
                                textAlign: 'center',
                                paddingLeft: 2,
                                paddingRight: 2,
                                margin: 0,
                                color: 'black',
                                fontSize:
                                {
                                    xs: '5.0vw',
                                    sm: '2.8vw',
                                    md: "1.8vw",
                                    lg: "1.95vw"
                                },

                            }}
                        >
                            <b>R.S.V.P. 5.7.2022 mennessä</b>.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'stretch',
                                margin: '3vw 1vw 1vw 1vw',
                            }}
                        >
                            <Box
                                sx={{ width: '100%', }}
                            >
                                <AlertDialog />
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
                
            </Box>

        </Box>





    );
}
