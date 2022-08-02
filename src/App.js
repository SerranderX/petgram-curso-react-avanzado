import React, { Fragment, useContext, lazy, Suspense } from "react";
import { GlobalStyles } from "@styles/GlobalStyles";
import { Navbar } from "@components/Navbar";
import PetgramLogo from "@assets/Logo";
import { Router, Redirect } from "@reach/router";
import { Detail } from "@pages/Detail";
import { Home } from "@pages/Home";
import { Users } from "@pages/Users";
import { NotFound } from "@pages/NotFound";
import { NotRegistredUser } from "@pages/NotRegistredUser";
import { Context } from "@/Context";
import { HelmetProvider } from 'react-helmet-async';

const Favs = lazy(() => import("@pages/Favs"));

export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <HelmetProvider>
      <Suspense fallback={ <div/>}>
        <GlobalStyles />
        <PetgramLogo path={"/"} />
        <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
          <Detail path="/detail/:detailId" />
          {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
          {!isAuth && <Redirect noThrow from='/user' to='/login' />}
          {isAuth && <Redirect noThrow from='/login' to='/' />}
          <Users path="/user" />
          <Favs path="/favs" />
          <NotRegistredUser path="/login" />
          <NotFound default />
        </Router>
        <Navbar/>
      </Suspense>
    </HelmetProvider>
  );
};
