import * as React from 'react';
import './NotificationWidget.css';
import SingleNotification from "./SingleNotification";

export interface Props {
    newNotification: boolean,
    message: string,
    type: string,
    position: string,
}

interface State {
    notificationList:
        Array<{
            message: string,
            position: string,
            type: string,
            key: string
        }>;

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

    componentDidUpdate(prevProps: Props, prevState: State) {
        // function triggered when a state property changes
        // here when we click on the button
        // this.addSingleNotification();

        // To avoid an infinite loop
        if (prevProps.newNotification !== this.props.newNotification) {
            this.addSingleNotification(this.props.message, this.props.type, this.props.position);
        }
    }

    addSingleNotification(message: string, type: string, position: string): void {

        const notification = {
            message: message,
            position: position,
            type: type,
            key: String(this.notificationCounter)
        };

        this.updateNotificationList(notification);
    }

    updateNotificationList(notification: any): void {

        console.log('update notification list')

        // We increment the counter so that the key of each notification will always be different
        this.notificationCounter++;
        //
        // Add the notification into the array
        this.notificationsToShow.push(notification);

        console.log(this.notificationsToShow)

        // Update the state parameter so that it will automatically re-render the component
        this.setState( {
            notificationList: this.notificationsToShow
        });

    }

    render() {

        // List of all possible positions
        const positionList = ['top-left', 'bottom-left', 'top-right', 'bottom-right'];

        return (
            <section id="all-notifications">
                {
                    positionList.map((position, index) => (
                        // Create a container for each position of notification
                        <div className="notification-area" id={position} key={index}>
                            {(this.state.notificationList || []).map(notification => {
                                // If we are in the right container, we show the component
                                // If not, we return empty
                                if (position === notification.position) {
                                    return <SingleNotification
                                        message={notification.message}
                                        position={notification.position}
                                        type={notification.type}
                                        key={notification.key}
                                    />
                                } else return ''
                            })}
                        </div>
                    ))
                }
            </section>
        )
    }

}

export default NotificationWidget;


