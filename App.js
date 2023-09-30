import React from 'react';



//Chat-Bot
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './src/chatbot/config';
import ActionProvider from './src/chatbot/ActionProvider';
import MessageParser from './src/chatbot/MessageParser';

import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import StudentInfoSystem from './src/components/StudentInfoSystem';
import ShowData from './src/components/ShowData';

import './App.css'


const App = () => {
  return (

    <Provider store={appStore}>
    <BrowserRouter>

    <div className='App'>   
    <Routes>
      <Route path="/" element={<StudentInfoSystem />} />
      <Route path="/chatbot" element={  <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider} />} />

      <Route path="/data" element={<ShowData />} />
    </Routes>  
    </div>   

    </BrowserRouter>
    </Provider>  
  )
}

export default App