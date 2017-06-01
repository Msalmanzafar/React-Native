import React, { Component } from 'react';

import { Text } from 'react-native';
import { Button, Card, MainCard, CardSection, HeadingBar, Input, Spinner, EndCardSection } from '../Common';
import { LogOutAction } from '../../Actions/AuthAction';
import { connect } from 'react-redux';


class AboutComp extends Component {
    
    constructor(props) {
        super(props);
        this.ButtonLogOut = this.ButtonLogOut.bind(this);
    }
    
    ButtonLogOut() {
        this.props.LogOutAction();
    }
    render() {
        let Email = this.props.userEmail.email;
        console.log("Email",Email)
        return (
            <Card>
                <Text>
                    This my new App
                    </Text>
                <EndCardSection>
                    <Text>{Email}</Text>
                </EndCardSection>
                <CardSection>
                    <Button onPress={this.ButtonLogOut}>
                        Log Out
                        </Button>
                </CardSection>

            </Card>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userEmail: state.AuthReducer.authSignIn,

    };
}
const mapDispatchToProps = (dispatch) => {
    return {

        LogOutAction: () => {
            dispatch(LogOutAction());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AboutComp);
// export default AboutComp;