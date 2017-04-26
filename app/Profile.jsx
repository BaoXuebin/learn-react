import React, { PropTypes } from 'react';
import Hobby from './Hobby';
import '../style/profile.css';

const propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: 0,
            hobbies: ['program', 'computer game', 'reading book']
        };
        this.clickAgreeBtn = this.clickAgreeBtn.bind(this);
        this.addHobbyCallback = this.addHobbyCallback.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.clickAgreeBtn();
        }, 1000);
    }

    clickAgreeBtn() {
        let liked = this.state.liked;
        liked += 1;
        this.setState({
            liked
        });
    }

    addHobbyCallback() {
        const hobbyInput = this.hobby;
        const addHobby = hobbyInput.value;
        if (addHobby) {
            let hobbies = this.state.hobbies;
            hobbies = [...hobbies, addHobby];
            this.setState({
                hobbies
            },
            () => {
                hobbyInput.value = '';
            });
        }
    }

    render() {
        return (
            <div className="profile-component">
                <h1>我的名字：{this.props.name}</h1>
                <h2>我今年{this.props.age}岁</h2>
                <button onClick={this.clickAgreeBtn}>Agree</button>
                <h2>支持数：{this.state.liked}</h2>
                <ul>
                    {this.state.hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby} />)}
                </ul>
                <input type="text" ref={(c) => { this.hobby = c; }} />
                <button onClick={this.addHobbyCallback}>add hobby</button>
            </div>
        );
    }
}

Profile.propTypes = propTypes;

export default Profile;
