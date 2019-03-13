import * as React from 'react';
import './App.css';

// Import the components
import NotificationWidget from './components/NotificationWidget';

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

        // Toggle the state
        if (this.state.showNotification) {
            this.setState({showNotification: false});
        } else {
            this.setState({showNotification: true});
        }

    }


    public render() {
        return (
            <section>
                <NotificationWidget newNotification={this.state.showNotification} />
                <h1>React Notification Widget</h1>
                <section>
                    <h2>Controls</h2>
                    <button
                        type="button"
                        onClick={this.addNotification.bind(this)}>
                        Add Notification
                    </button>
                </section>
            </section>
        );
    }
}

export default App;
