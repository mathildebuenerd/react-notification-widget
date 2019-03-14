// https://codesandbox.io/s/3v2nvvn8yp
import * as React from 'react';
import './Form.css';

interface Props {
    handleMessageChange: any,
    handlePositionChange: any,
    handleSubmit: any,
    formData: {
        message: string,
        position: string
    }
}

interface State {
    validate: boolean
}

class Form extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.props.formData.position = "bottom-right";
        this.state = {
            validate: false
        };
    }

    public render() {
        return(
            <section id="controls">
                <h2>Controls</h2>
                <form>
                    <section id="choose-message">
                        <h3>What message do you want?</h3>
                        <label>Message
                            <input
                                onChange={this.props.handleMessageChange}
                                type="text"
                                value={this.props.formData.message}
                                placeholder="Type your message"
                            />
                        </label>
                    </section>


                    <section id="choose-position">
                        <h3>Where do you want the notification to show?</h3>
                        <label>
                            <span className="position-label">
                                <span className="icon-arrow" aria-hidden>↖️</span>️Top left
                            </span>
                            <input type="radio" name="position" value="top-left" id="top-left"
                                   checked={this.props.formData.position === "top-left"}
                                   onChange={this.props.handlePositionChange} />
                        </label>
                        <label>
                            <span className="position-label">
                                <span className="icon-arrow" aria-hidden>↗️</span>Top right
                            </span>
                            <input type="radio" name="position" value="top-right" id="top-right"
                                   checked={this.props.formData.position === "top-right"}
                                   onChange={this.props.handlePositionChange} />
                        </label>
                        <label>
                            <span className="position-label">
                                <span className="icon-arrow" aria-hidden>↙️</span>Bottom left
                            </span>
                            <input type="radio" name="position" value="bottom-left" id="bottom-left"
                                   checked={this.props.formData.position === "bottom-left"}
                                   onChange={this.props.handlePositionChange} />
                        </label>
                        <label>
                            <span className="position-label">
                                <span className="icon-arrow" aria-hidden>↘️</span>Bottom right
                            </span>
                            <input type="radio" name="position" value="bottom-right" id="bottom-right"
                                   checked={this.props.formData.position === "bottom-right"}
                                   onChange={this.props.handlePositionChange} />
                        </label>

                    </section>

                    <section id="choose-type">
                        <h3>What kind of notification?</h3>
                        <button
                            id="good-news"
                            type="button"
                            onClick={this.props.handleSubmit}>
                            Show good news
                        </button>
                        <button
                            id="alert"
                            type="button"
                            onClick={this.props.handleSubmit}>
                            Show alert
                        </button>
                        <button
                            id="problem"
                            type="button"
                            onClick={this.props.handleSubmit}>
                            Show problem
                        </button>
                    </section>

                </form>
            </section>
        )
    }

}


export default Form;
