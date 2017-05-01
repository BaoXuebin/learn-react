import React, { PropTypes } from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.handleDisconnect = this.props.disconnect;
    }

    render() {
        return (
            <div className="page-header">
                <h2>
                    聊天室
                    <small>based on react</small>
                    <button className="btn btn-danger pull-right" onClick={this.handleDisconnect} >Disconnet</button>
                </h2>
            </div>
        );
    }
}

Title.propTypes = { disconnect: PropTypes.func.isRequired };
export default Title;
