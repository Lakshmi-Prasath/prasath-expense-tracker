import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Divider, IconButton, Box, Modal, Grid, ImageList, ImageListItem, autocompleteClasses } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import loginstyles from './LoginPage.module.css'
import googlelogo from '../../assets/svg icons/googleIcon.svg'
import patternImg from '../../assets/svg img/patternImg.f93bd17c.svg'
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { Padding, Style } from '@mui/icons-material';

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "600px",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

function LoginPage() {
    let navigate = useNavigate()
    const [open, setOpen] = React.useState(false);

    const [storeEmailId, setStoreEmailId] = useState('dfg')
    const [storePassword, setStorePassword] = useState('sgf')
    const [color, setColor] = useState("")
    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')



    useEffect(() => {
        console.log("fromUseEffect", storeEmailId)
        emailValidation(storeEmailId)
    }, [storeEmailId])


    const onChangeEmail = (data: any) => {
        console.log("onchangeemail", data)
        setStoreEmailId(data)
    }

    const onChangePassword = (data: any) => {
        setStorePassword(data)
    }

    const emailValidation = (data: any) => {
        console.log("valditaion", data)
        const regEx = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (regEx.test(data)) {
            setEmailMessage("email is valid");

        } else if (!regEx.test(data) && data != "") {
            setEmailMessage("*email is not valid");
            setColor("#FF0000")
        }
    }
    const passwordValidation = (data: any) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        if (passwordRegex.test(data)) {
            setPasswordMessage("password is valid")

        } else if (!passwordRegex.test(data) && data != "") {
            setPasswordMessage("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character (!@#$%^&*)")
            setColor("red")
        }
    }

    const onClickContinue = (data: any) => {
        if (data == "email is valid" && passwordMessage == "password is valid") {
            {
                let path = "/homescreenpage"
                navigate(path)
            }
        }
    }

    return (
        <>
            <h1>LOGIN PAGE</h1>
            <div>
                <div className={`${loginstyles.heroHeading}`}>
                    <span>All things finance,</span>
                    <br />
                    <span>right here.</span>
                </div>
                <div className={`${loginstyles.heroSubheading}`}>
                    <span>Built for a growwing India.</span>
                </div>
                <div className={`${loginstyles.div_center}`}>
                    <button onClick={() => { setOpen(true) }} className={`${loginstyles.button}`}>
                        Get started
                    </button>
                    <Modal
                        open={open}
                        onClose={() => { setOpen(false) }}
                    >
                        <Grid
                            xs={6}
                            sx={modalStyle}
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid
                                sx={{
                                    backgroundColor: "yellow",
                                    display: { xs: "none", sm: "block" },

                                }}
                                xs
                            >
                                {/* <ImageList>
                                    <ImageListItem> */}
                                <img src={patternImg} alt=""
                                    width="100%"
                                />
                                {/* </ImageListItem>
                                </ImageList> */}
                            </Grid>
                            <Grid
                                sx={{
                                    backgroundColor: "red",
                                    textAlign: "center",
                                    padding: { xs: "1rem 2rem" },
                                }}
                                xs
                            >

                                <Typography variant="h6" component="h2"
                                    sx={{
                                        fontSize: { xs: "0.8rem" },
                                        fontWeight: "600"
                                    }}
                                >
                                    Welcome to groww
                                </Typography>
                                <Button
                                    variant='contained'
                                    sx={{
                                        backgroundColor: "white",
                                        padding: { xs: "0.1rem 0.5rem" },
                                        margin: { xs: "1rem 0" }
                                    }}
                                >
                                    <img
                                        src={googlelogo}
                                        alt=""
                                        className={`${loginstyles.googleLogo}`}
                                    />
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.4rem" },
                                            margin: { xs: "0px 0.5rem" },
                                            fontWeight: "600"
                                        }}
                                    >
                                        Continue with Google
                                    </Typography>
                                </Button>
                                <Divider>
                                    <Typography
                                        variant='caption'
                                    >
                                        OR
                                    </Typography>
                                </Divider>
                                <TextField
                                    label='Your Email Address'
                                    variant='standard'
                                    fullWidth
                                />
                                <TextField
                                    label='Password'
                                    variant='standard'
                                    fullWidth
                                />
                                <Button
                                    variant='contained'
                                    sx={{
                                        fontSize: { xs: "0.5rem" },
                                        margin: { xs: "1rem 0" }
                                    }}
                                >
                                    Continue
                                </Button>
                                <br />
                                <Typography
                                    variant='caption'
                                    sx={{ fontSize: { xs: "0.5rem" } }}
                                >
                                    By proceeding, I agree to T&C, Privacy Policy & Tarrif Rules
                                </Typography>
                            </Grid>
                        </Grid>

                    </Modal >
                </div >
            </div >
        </>
    )
}

export default LoginPage