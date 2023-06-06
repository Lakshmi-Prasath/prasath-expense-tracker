import { useState } from 'react';
import { Button, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import DrawerComp from '../dawer/DrawerComp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/loginPage/LoginPage';
import HomescreenPage from '../pages/homescreenPage/HomescreenPage';


function AppbarComp(props: any) {


    const routes = props.routes.map((element: any) => (
        <button style={{ backgroundColor: "red" }}>
            <Link
                to={element.path}
            >
                {element.name}
            </Link>
        </button>
    ))
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static'>
                    <Toolbar>
                        <IconButton
                            size='large'
                            edge="start"
                            color='inherit'
                            aria-label='menu'
                            sx={{ mr: 3 }}
                        >
                            <DrawerComp routes={props.routes} />
                            {/* <DrawerComp /> */}
                        </IconButton>
                        <Typography
                            variant='h6'
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                                DEV SCATTER
                            </Link>

                            {routes}

                        </Typography>

                        <Button color='inherit'>
                            <Link to="/loginpage" style={{ textDecoration: "none", color: "inherit" }}>
                                Login
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>


        </>
    )
}

export default AppbarComp