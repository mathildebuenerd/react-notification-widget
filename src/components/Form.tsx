// https://codesandbox.io/s/3v2nvvn8yp
import * as React from 'react';
import './Form.css';

interface Props {
    handleSubmit: any,
    handleChange: any,
    formData: {
        message: string
    }
}

interface State {
    validate: boolean
}

class Form extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            validate: false
        };
    }

    public render() {
        return(
            <section>
                <h2>Controls</h2>
                <form>
                    <label>Message
                        <input
                            onChange={this.props.handleChange}
                            type="text"
                            value={this.props.formData.message}
                            placeholder="Type your message"
                        />
                    </label>
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
                </form>
            </section>
        )
    }

}


export default Form;
