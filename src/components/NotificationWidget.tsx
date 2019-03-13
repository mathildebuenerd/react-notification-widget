import * as React from 'react';
import './NotificationWidget.css';
import SingleNotification from "./SingleNotification";

export interface Props {
}

interface State {
    notificationList: Array<any>
}

class NotificationWidget extends React.Component<Props, State> {

    notificationsToShow: Array<any>;
    notificationCounter: number;

    constructor(props: Props) {
        super(props);

        this.notificationsToShow = [];
        this.state = {
            notificationList: []
        };


        // Create a counter in order to give a unique key to each notification in the list
        this.notificationCounter = 0;
    }

    onAddSingleNotification(): void {
        console.log(`add single notification`)
        const message = "shut down your browser please";
        const position = "top left";
        const type = "alert";
        const notification = new SingleNotification(
            {
                message: message,
                position: position,
                type: type,
                key: String(this.notificationCounter)
            });

        this.updateNotificationList(notification);
    }

    updateNotificationList(notification: SingleNotification): void {

        console.log('update notification list')

        // We increment the counter so that the key of each notification will always be different
        this.notificationCounter++;

        // Add the notification into the array
        this.notificationsToShow.push(notification);

        console.log(this.notificationsToShow)

        // Update the state parameter so that it will automatically re-render the component
        this.setState( {
            notificationList: this.notificationsToShow
        }, () => {
            console.log('I updated the state')
        });

    }

    render() {
        console.log(`I am rendering, here is the notificationList`, this.notificationsToShow);
        return (
            <section id="all-notifications">
                {(this.state.notificationList || []).map((notification) => (
                    <SingleNotification
                        message={notification.props.message}
                        position={notification.props.position}
                        type={notification.props.type}
                        key={String(this.notificationCounter)}
                    />
                ))}
            </section>
        )
    }

}

export default NotificationWidget;


