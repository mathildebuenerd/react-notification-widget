import * as React from 'react';
import './NotificationWidget.css';

export interface Props {
    message: string;
    position: string;
    type: string;
}

class NotificationWidget extends React.Component<Props, object> {
    render() {
        const {message, position, type} = this.props;

        return this.show(message, position, type);

    }

    show(message: string, position: string, type: string) {
        return (
            <div className="notification">
                <span>Message: {message}</span>
                <span>Position: {position}</span>
                <span>Type: {type}</span>
            </div>
        )
    }

}

export default NotificationWidget;