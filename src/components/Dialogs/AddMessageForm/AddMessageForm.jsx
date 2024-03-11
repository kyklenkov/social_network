import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormControl/FormControl";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name='newMessageBody'
                       placeholder='Enter your message, please :)'/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

export default reduxForm ({form: 'dialog-add-message-form'})(AddMessageForm)