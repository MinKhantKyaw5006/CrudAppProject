import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/ReduxStore';
import ReactDOM  from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path= "*" element = {<App/>} />
    </Routes>

    {/* <App/> */}
    </BrowserRouter>
    
  </Provider>,
  document.getElementById("root")
);






// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import store from './store/ReduxStore';
// import App from './App';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Routes>
//         <Route path="*" element={<App />} />
//       </Routes>
//     </BrowserRouter>
//   </Provider>
// );
