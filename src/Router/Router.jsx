import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import firebase from "firebase";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";

import { Chats } from "../Screens/Chats";
import { Dogs } from "../Screens/Dogs";
import { Home } from "../Screens/Home";
import { Profile } from "../Screens/Profile";
import { SignIn } from "../Screens/SignIn";
import { SignUp } from "../Screens/SignUp";
import { ROUTES } from "./constants";
import { PrivateRoute } from "../Components/PrivateRoute";
import { PublicRoute } from "../Components/PublicRoute";

const INIT_CHATS = { id1: { name: "chat 1" } };

export const Router = () => {
  const [chatList] = useState(INIT_CHATS);
  const [auth, setAuth] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const handleInitFirebaseAuth = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
      setAuth(user);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleInitFirebaseAuth();
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.CHAT}>Chats</Link>
        </li>
        <li>
          <Link to={ROUTES.PROFILE}>Profile</Link>
        </li>
        <li>
          <Link to={ROUTES.DOGS}>Dogs</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign in</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_UP}>Sign up</Link>
        </li>
      </ul>

      <Switch>
        <PrivateRoute exact path={ROUTES.CHATS} auth={auth}>
          <Chats chatList={chatList} />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.PROFILE} auth={auth}>
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path={ROUTES.NO_CHAT} auth={auth}>
          no chat content
        </PrivateRoute>
        <PublicRoute
          exact
          path={ROUTES.HOME}
          render={() => <Home />}
          auth={auth}
        />
        <Route exact path={ROUTES.DOGS} auth={auth}>
          <Dogs />
        </Route>
        <PublicRoute exact path={ROUTES.SIGN_IN} auth={auth}>
          <SignIn />
        </PublicRoute>
        <PublicRoute exact path={ROUTES.SIGN_UP} auth={auth}>
          <SignUp />
        </PublicRoute>
        <Route path={ROUTES.NOT_FOUND}>Not found 404</Route>
        <Route>
          <Redirect to={ROUTES.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
