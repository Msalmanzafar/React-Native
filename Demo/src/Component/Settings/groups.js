import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
// import { Card, CardSection, Spinner } from '../Common';
import { connect } from 'react-redux';
import groupAvatar from '../images/Groups-icon.png'
import { OpenGroupAction } from '../../Action/groupAction'
import {memberActions} from '../../Action/joinGroupAction'



const styles = StyleSheet.create({
    setting: {
        marginLeft: -15
    },
})
class Groups extends Component {

    OpenGroupDetails(GroupId) {
        // console.log(Admin, 'Admin');
        this.props.OpenGroupAction(GroupId);
        this.props.memberActions(GroupId)
    }
    render() {
        const {
            Group
        } = this.props;
        // console.log(Group, "Groupss")
        let AllGroups = Object.keys(this.props.Group).map((key, index) => {
            let val = this.props.Group[key];
            let GroupId = key;
            return (
                <List key={index}>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail size={50} source={groupAvatar} />
                        </Left>
                        <Body>
                            <Text>{val.Gname}</Text>
                        </Body>
                        <Right>
                            <Button onPress={this.OpenGroupDetails.bind(this, GroupId)} bordered >
                                <Text>
                                    Open
                                </Text>
                            </Button>
                        </Right>
                    </ListItem>
                </List>
            )
        }
        )
        return (
            <Container style={styles.setting}>
                <Content>
                    {AllGroups}
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // auth: state.AuthReducer,
        Group: state.NewGroupReducers.newGroup
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        OpenGroupAction: (GroupId) => {
            dispatch(OpenGroupAction(GroupId));
        },
        memberActions: (GroupId)=>{
            dispatch(memberActions(GroupId));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Groups);

// export default Groups;