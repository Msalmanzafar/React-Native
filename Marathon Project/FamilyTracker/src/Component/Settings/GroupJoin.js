import React, { Component } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Card, CardSection, Spinner, Button } from '../Common';

import {
    Container, Content, Input, Item, Thumbnail, Left,
    Form, Text, Header, Body, Right, Label, List, ListItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { JoinGroupAction } from '../../Action/joinGroupAction'
import person from '../images/person.png';


const styles = StyleSheet.create({
    setting: {
        marginTop: 10
    },
})
class Join extends Component {
    constructor(props) {
        super(props);
        this.state = {
            JoinKey: '',
        }
    }
    trackingGroup() {
        Actions.tracking()
    }
    JoinGroup() {
        let joinKey = this.state.JoinKey;
        let GroupName = this.props.SelectedGroup.Gname;
        let joining = {
            joinKey,
            GroupName
        }
        this.props.JoinGroupAction(joining);
    }
    render() {
        const {
            SelectedGroup,
            Members
        } = this.props;
        // console.log(Members, 'Members')

        let Persons = this.props.Members.map((v, i) => {
            // let val = this.props.Members[key];
            // let GroupId = key;
            // console.log('values',v)
            return (
                <List key={i}>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail size={50} source={person} />
                        </Left>
                        <Body>
                            <Text>{v.email}</Text>
                        </Body>
                    </ListItem>
                </List>
            )
        }
        )
        return (
            <Container >
                <Content>
                    <Header>
                        <Body style={{ flex: 1 }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
                                {SelectedGroup.Gname}
                            </Text>
                        </Body>
                        <Right>
                            <TouchableOpacity onPress={this.trackingGroup.bind(this)}>
                                <Text style={{ color: 'white', fontSize: 16 }}>
                                    Track
                                </Text>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                    <View style={styles.setting}>
                        <Form>
                            <Item stackedLabel last>
                                <Label>Enter key</Label>
                                <Input
                                    value={this.state.JoinKey}
                                    onChangeText={JoinKey => this.setState({ JoinKey })}
                                />
                            </Item>
                            <Item last>
                                <Text style={{ color: 'gray', fontSize: 14, textAlign: 'center' }}>
                                    Enter Key For Joining this group,
                                You need to Ask Admin,
                                Provide you a Specific key..
                            </Text>
                            </Item>
                            <CardSection>
                                {(!this.props.loader) ? (
                                    <Button onPress={this.JoinGroup.bind(this)} >
                                        Join Group
                                        </Button>
                                ) : (
                                        <Spinner size='large' />
                                    )}
                            </CardSection>
                        </Form>
                    </View>
                    <View style={{ marginLeft: -15,flex: 1}}>
                        {Persons}
                    </View>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        SelectedGroup: state.GroupsReducers.GroupData,
        Members: state.GroupsReducers.grooupMemeber
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        JoinGroupAction: (joining) => {
            dispatch(JoinGroupAction(joining));
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Join);

// export default Groups;