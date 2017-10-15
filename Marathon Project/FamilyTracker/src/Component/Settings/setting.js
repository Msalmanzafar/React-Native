import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Button, Text, Item, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from '../Common';
import { LogOutAction } from '../../Action/auth-action';
import { GetGroupsData } from '../../Action/circle-Action'
import { connect } from 'react-redux';


const styles = StyleSheet.create({
    setting: {
        marginTop: 50,
        flex: 1,

    },
    Button: {
        marginBottom: 15
    }
})
class Settings extends Component {
    newCircle() {
        Actions.circle();
    }
    Groups() {
        this.props.GetGroupsData();
    }
    logOut() {
        this.props.LogOutAction()
    }
    render() {
        const {
            loader
        } = this.props;
        return (
            <View style={styles.setting}>
                <Button style={styles.Button} onPress={this.newCircle.bind(this)} block success rounded >
                    <Text>Create Circle</Text>
                </Button>
                {(loader == true) ? (
                    <Spinner size='large' />
                ) : (
                        <Button style={styles.Button} onPress={this.Groups.bind(this)} success block rounded >
                            <Text>Groups</Text>
                        </Button>
                    )}

                {/* <Button style={styles.Button} success block rounded >
                    <Text>Users</Text>
                </Button> */}

                <Button style={styles.Button} onPress={this.logOut.bind(this)} success block rounded >
                    <Text>Log Out</Text>
                </Button>

            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loader: state.NewGroupReducers.loading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        LogOutAction: () => {
            dispatch(LogOutAction());
        },
        GetGroupsData: () => {
            dispatch(GetGroupsData());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Settings);

// export default Settings;