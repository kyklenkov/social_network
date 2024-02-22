import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></input>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;


/*import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editmode: false
    }

    activateEditMode = () => {
             this.setState( {
                editmode: true
            });
    }
    deactivateEditMode = () => {
             this.setState( {
                editmode: false
            });
    }

    render() {
        return (
            <div>
                {!this.state.editmode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
                    </div>
                }
                {this.state.editmode &&
                    <div>
                        <input autoFocus={true} onBlur={ this.deactivateEditMode } value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;*/
