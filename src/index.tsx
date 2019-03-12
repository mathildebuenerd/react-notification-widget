import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Import the components
import NotificationWidget from './components/NotificationWidget';

ReactDOM.render(
  <NotificationWidget
                message="It's time to shut down your browser"
                position="topleft"
                type="alert"
            />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
