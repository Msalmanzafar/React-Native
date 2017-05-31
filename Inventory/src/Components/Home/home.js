import React, { Component } from 'react';
import { Text, View } from 'react-native'
import { Button, Card, MainCard, CardSection, HeadingBar, Input, Spinner, EndCardSection } from '../Common';
import { connect } from 'react-redux';


class HomePage extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Text>{this.props.userEmail.email}</Text>
                </CardSection>


                <EndCardSection>
                    <Button onPress={this.ButtonLogOut}>
                        Log Out
                    </Button>
                </EndCardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userEmail: state.AuthReducer.authSignIn,
        // loader: state.AuthReducer.loader,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SignInAction: (userLogin) => {
            dispatch(SignInAction(userLogin));
        },
        LogOutAction: () => {
            dispatch(LogOutAction());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);