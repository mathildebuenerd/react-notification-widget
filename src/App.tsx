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
        message: string,
        buttonId: string,
        position: string
    }
}

class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            showNotification: false,
            formData: {
                message: "",
                buttonId: "",
                position: ""
            }
        }
    }

    addNotification(e: any) {

        console.log(`clicked button`, e)

        const buttonId = String(e.target.id);

        // Toggle the state
        if (this.state.showNotification) {
            this.setState({
                showNotification: false,
                formData: {
                    message: this.state.formData.message,
                    buttonId: buttonId,
                    position: this.state.formData.position
                }
            });
        } else {
            this.setState({
                showNotification: true,
                formData: {
                    message: this.state.formData.message,
                    buttonId: buttonId,
                    position: this.state.formData.position
                }
            });
        }

    }

    handlePositionChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        this.setState(prevState => ({
            formData: {
                ...prevState.formData, position: value
            }
        }));
    }

    handleMessageChange(e: React.ChangeEvent<HTMLInputElement>) {
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
            <section role="main">
                <NotificationWidget
                    newNotification={this.state.showNotification}
                    message={this.state.formData.message || `You haven't written a message`}
                    type={this.state.formData.buttonId}
                    position={this.state.formData.position}
                />
                <h1>React Notification Widget</h1>
                <Form
                    handleMessageChange={this.handleMessageChange.bind(this)}
                    handlePositionChange={this.handlePositionChange.bind(this)}
                    handleSubmit={this.addNotification.bind(this)}
                    formData={this.state.formData}
                />
            </section>
        );
    }
}

export default App;
