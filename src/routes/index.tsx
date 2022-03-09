import React from "react";
import {
  Routes as RouterDom,
  Route,
} from "react-router-dom";
import {Main} from '../pages/Main';
import {Login} from '../pages/Login';
import { ForgotPassword } from "../pages/ForgotPassword";
import { RegisterMe } from "../pages/RegisterMe";

export function Routes() {
  return (
    <RouterDom>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>  
      <Route path="/forgot" element={<ForgotPassword/>} />
      <Route path="/register-me" element={<RegisterMe/>} />
    </RouterDom>
  );
}