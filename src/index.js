import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {PI,area,circumference } from './circle';
import * as circle from "./circle";
import aa from "./test";
import lodash from "lodash"; 

const arr = [1, 1, 1, 2, 2, 1, 1, 4, 4, 3, 2];
const uniqueArr = lodash.uniqBy(arr); 

console.log(uniqueArr);
 
console.log(`PI : ${PI}`)
console.log(`area : ${area(10)}`)
console.log(`circumference : ${circumference(10)}`)
console.log(`circle.PI : ${circle.PI}`)
console.log(`circle.area : ${circle.area(10)}`)
console.log(`circle.circumference : ${circle.circumference(10)}`)
console.log(`PI1 : ${aa}`)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
