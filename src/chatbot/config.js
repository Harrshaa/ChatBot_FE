import { createChatBotMessage } from 'react-chatbot-kit';
import GotIt from '../components/GotIt';
import Slot from '../components/Slot';
import ExitCounter from '../components/Exit';
import Age from '../components/Age';

const config = {
    botName: "HappilyEver",
  initialMessages: [createChatBotMessage(`Hello, Welcome to student info system`, {
    widget: "GotItBtn"
  })], 
  widgets:[
    {
      widgetName: "GotItBtn",
      widgetFunc: (props) => <GotIt {...props} />,
    },
    {
      widgetName: "slots",
      widgetFunc: (props) => <Slot {...props} />,
    },
    {
      widgetName: "exit",
      widgetFunc: (props) => <ExitCounter {...props} />,
    },
    {
      widgetName: "Age",
      widgetFunc: (props) => <Age {...props} />,
    }

  ]
  
};

export default config;