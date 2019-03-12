import * as React from 'react';
import './NotificationWidget.css';

export interface Props {
    message: string;
    position: string;
    type: string;
    duration?: number;

}

interface State {
    expired: boolean;
}

class NotificationWidget extends React.Component<Props, State> {

    // Create a variable for storing the setTimeout for expiration
    expiration: any;

    // Setting default duration time
    // https://stackoverflow.com/questions/37282159/default-property-value-in-react-component-using-typescript
    public static defaultProps = {
        duration: 3000
    }

    constructor(props: Props) {
        super(props);
        this.state = {expired: false};
    }



    show(message: string, position: string, type: string): object {

        return (
            <div className="notification">
                <span>Message: {message}</span>
                <span>Position: {position}</span>
                <span>Type: {type}</span>
            </div>
        )
    }

    componentDidMount(): void {
        // In React, setting up a timer whenever the component is rendered to the DOM for the first time is called "mounting"
        this.expiration = setTimeout( () => {
            this.unmountComponent();
        }, this.props.duration);
    }

    unmountComponent(): void {
        // clearing a timer previously setted with componentDidMound() is called "unmounting"
        this.setState({expired: true});
        clearTimeout(this.expiration);
    }

    render() {
        // If the notification state is not expired, we show it
        // If it is, we return an empty element ''
        return this.state.expired ? '' : this.show(this.props.message, this.props.position, this.props.type);
    }

}

export default NotificationWidget;