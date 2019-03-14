import * as React from 'react';
import './App.css';

// Import the components
import NotificationWidget from './components/NotificationWidget';
import Form from './components/Form';

interface Props {

}

interface State {
    showNotification: boolean;
    formData: {
        message: string
    }
}

class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            showNotification: false,
            formData: {
                message: ""
            }
        }
    }

    addNotification() {

        // Toggle the state
        if (this.state.showNotification) {
            this.setState({showNotification: false});
        } else {
            this.setState({showNotification: true});
        }

    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        // By default, we can't type into a form
        const value: string = e.target.value;

        this.setState(prevState => ({
            formData: {
                ...prevState.formData, message: value
            }
        }));
    };


    public render() {
        return (
            <section>
                <NotificationWidget
                    newNotification={this.state.showNotification}
                    message={this.state.formData.message || `You haven't written a message`}
                />
                <h1>React Notification Widget</h1>
                <Form
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.addNotification.bind(this)}
                    formData={this.state.formData}
                />
            </section>
        );
    }
}

export default App;
