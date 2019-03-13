import * as React from 'react';
import './App.css';

// Import the components
import NotificationWidget from './components/NotificationWidget';
const notificationWidget = new NotificationWidget({notificationList: []});
// import SingleNotification from './components/SingleNotification';

interface Props {

}

interface State {
    showNotification: boolean;
}

class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {showNotification: false}
    }

    addNotification() {
        notificationWidget.onAddSingleNotification();
    }


    public render() {
        return (
            <section>
                <NotificationWidget />

                <h1>React Notification Widget</h1>
                <section>
                    <h2>Controls</h2>
                    <button type="button" onClick={this.addNotification}>Add Notification</button>
                </section>
            </section>
        );
    }
}

export default App;
