import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import customTheme from './utils/theme';
import AppbarComp from './appBar/AppbarComp';
import { Routes, Route, Router } from "react-router";


import DevScatterUi from './devscatterui/DevScatterUi';
import LoginPage from './pages/loginPage/LoginPage';
import DrawerComp from './dawer/DrawerComp';
import SignupPage from './pages/signupPage/SignupPage';
import ForgotPasswordPage from './pages/forgotpasswordPage/ForgotPasswordPage';
import HomescreenPage from './pages/homescreenPage/HomescreenPage';
import OtpPage from './pages/otpscreenPage/OtpPage';
import ResetPasswordPage from './pages/5resetpassword/ResetPasswordPage';
import AddAccountPage from './pages/6addaccount/AddAccountPage';
import InvitePage from './pages/8invitepage/InvitePage';
import AxiosPage from './pages/axiospage/AxiosPage';
import ProtectedRouter from './protectedRouter/ProtectedRouter';
import { Container } from '@mui/material';


function App() {
  const routes = [
    {
      name: "Axios",
      path: "/axiospage",
      element: <AxiosPage />
    },
    {
      name: "Invite",
      path: "/invitepage",
      element: <InvitePage />
    },
  ]
  const routes2 = [
    {
      name: "Login",
      path: "/",
      element: <LoginPage />
    },
    {
      name: "DevScatter UI",
      path: "/devscatter",
      element: <DevScatterUi />
    },
    {
      name: "Home",
      path: "/homescreenpage",
      element: <HomescreenPage />
    },
    {
      name: "Forget Password",
      path: "/forgotpasswordpage",
      element: <ForgotPasswordPage />
    },
    {
      name: "Signup",
      path: "/signuppage",
      element: <SignupPage />
    },
    {
      name: "Otp Screen",
      path: "/otppage",
      element: <OtpPage />
    },
    {
      name: "Reset Password",
      path: "/resetpasswordpage",
      element: <ResetPasswordPage />
    },
    {
      name: "Add Account",
      path: "/addaccountpage",
      element: <AddAccountPage />
    },
    {
      name: "Drawer",
      path: "/drawercomp",
      element: <DrawerComp />
    },
    {
      name: "AppBar",
      path: "/appbarcomp",
      element: <AppbarComp />
    },
  ]
  const routeComponents = routes.map((element) => ((
    <Route key={element.name} path={element.path} element={element.element} />
  )))
  return (
    <>
      {console.log(routeComponents)}
      <Container sx={{ backgroundColor: "transparent" }}>
        <ThemeProvider theme={customTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route element={<ProtectedRouter routes={routes} />}>
                <Route path="homescreenpage" element={<HomescreenPage />} />
                <Route path="/axiospage" element={<AxiosPage />} />
                <Route path="/invitepage" element={<InvitePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider >
      </Container>
    </>
  );
}

export default App;
