import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Homework from "./homework";
import {Routes, Route, Link, Router} from "react-router-dom";
import Detail from './detail';

function App() {

  return (
    <div className="App">
  <Routes>
    <Route path="/homework" element={<Homework/>}/>
    <Route path="/image/:id" element={<Detail/>}/>
  </Routes>
  <Link to="/homework">홈페이지</Link>
    </div>
  );

  
  }

export default App;
