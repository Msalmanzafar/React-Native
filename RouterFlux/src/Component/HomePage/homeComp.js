import React from 'react';

import { View } from 'react-native';
// import { Button, Card, MainCard, CardSection, HeadingBar, Input, Spinner, EndCardSection } from '../Common';
import { LogOutAction } from '../../Actions/AuthAction';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import { connect } from 'react-redux';


class HomeComp extends React.PureComponent {

    constructor(props) {
        super(props);
        this.ButtonLogOut = this.ButtonLogOut.bind(this);
    }

    ButtonLogOut() {
        this.props.LogOutAction();
    }
    render() {
        // let Email = this.props.userEmail.email;
        // console.log("Email",Email)
        return (
            <View>
                <Container>
                    <Content>
                        <Item>
                            <Button block danger onPress={this.ButtonLogOut}>
                                <Text>Log Out</Text>
                            </Button>
                        </Item>
                    </Content>
                </Container>
            </View>

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
export default connect(mapStateToProps, mapDispatchToProps)(HomeComp);
// export default AboutComp;

