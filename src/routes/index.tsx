import React from "react";
import {
  Routes as RouterDom,
  Route,
} from "react-router-dom";
import {Main} from '../pages/Main';
import {Login} from '../pages/Login';
import { ForgotPassword } from "../pages/ForgotPassword";

export function Routes() {
  return (
    <RouterDom>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>  
      <Route path="/forgot" element={<ForgotPassword/>} />
    </RouterDom>
  );
}