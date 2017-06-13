import React from 'react';

import { Text } from 'react-native';
import { Button, Card, MainCard, CardSection, HeadingBar, Input, Spinner, EndCardSection } from '../Common';
import { LogOutAction } from '../../Actions/AuthAction';
import { connect } from 'react-redux';


class HomeComp extends React.PureComponent{
    
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
                {/*<EndCardSection>
                    <Text>{Email}</Text>
                </EndCardSection>*/}
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeComp);
// export default AboutComp;

