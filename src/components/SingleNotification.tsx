import * as React from 'react';
import './SingleNotification.css';


export interface Props {
    message: string;
    position: string;
    type: string;
    key: string;
    duration?: number;
}

interface State {
    expired: boolean;
}

class SingleNotification extends React.Component<Props, State> {

    // Create a variable for storing the setTimeout for expiration
    expiration: any;

    // Setting default duration time
    // https://stackoverflow.com/questions/37282159/default-property-value-in-react-component-using-typescript
    public static defaultProps = {
        duration: 5000
    }

    constructor(props: Props) {
        super(props);
        this.state = {expired: false};
    }



    show(message: string, position: string, type: string): object {
        const classNames = `notification ${position} ${type}`;
        return (
            <div className={classNames}>
                <p className="text-notif">
                    {message}
                </p>
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
        console.log(this.props)
        // If the notification state is not expired, we show it
        // If it is, we return an empty element ''
        return this.state.expired ? '' : this.show(this.props.message, this.props.position, this.props.type);
    }

}

export default SingleNotification;