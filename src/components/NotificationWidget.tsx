import * as React from 'react';
import './NotificationWidget.css';
import SingleNotification from "./SingleNotification";

export interface Props {
    newNotification: boolean
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

    componentDidUpdate(prevProps: Props, prevState: State) {
        // function triggered when a state property changes
        // here when we click on the button
        // this.addSingleNotification();

        console.log(`prevProps`, prevProps, `newProp`, this.props.newNotification)

        // To avoid an infinite loop
        if (prevProps.newNotification !== this.props.newNotification) {
            this.addSingleNotification();
        }
    }

    addSingleNotification(): void {
        console.log(`add single notification`)
        // const message = "shut down your browser please";
        // const position = "top left";
        // const type = "alert";
        const notification = (
            <SingleNotification
                message={"hello"}
                position={"top right"}
                type={"alert"}
                key={String(this.notificationCounter)}
            />
        );

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
        console.log(`I am rendering, here is the notificationList`, this.notificationsToShow);
        return (
            <section id="all-notifications">
                {(this.state.notificationList || []).map((notif) => (
                    <div>New notification</div>
                    // this.state.notificationList[notif]
                ))}
            </section>
        )
    }

}

export default NotificationWidget;


