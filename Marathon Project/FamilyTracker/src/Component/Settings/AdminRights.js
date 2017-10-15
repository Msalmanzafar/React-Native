import React, { Component } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Card, CardSection, Spinner, Button } from '../Common';

import {
    Container, Content, Input, Item,Thumbnail,Left,
    Form, Text, Header, Body, Right, Label,List,ListItem
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import person from '../images/person.png';


const styles = StyleSheet.create({
    setting: {
        marginTop: 20
    },
})
class AdminRights extends Component {
    constructor(props) {
        super(props);
    }
    trackingGroup() {
        Actions.tracking()
    }
    // AddMembers() {
    //     Actions.groupJoin()
    // }
    render() {
        const {
            SelectedGroup,
            Members
        } = this.props;
        console.log(Members, 'Members')

        let Persons = this.props.Members.map((v, i) => {
            // let val = this.props.Members[key];
        // let GroupId = key;
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
        // console.log(SelectedGroup, 'SelectedGroupAdmin');
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
                        {/* <CardSection>
                            {(!this.props.loader) ? (
                                <Button onPress={this.AddMembers.bind(this)} >
                                    Add Members
                                </Button>
                            ) : (
                                    <Spinner size='large' />
                                )}
                        </CardSection> */}
                        <View last>
                            <Text style={{ color: 'gray', fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>
                                {SelectedGroup.groupId.slice(SelectedGroup.groupId.length - 5)}
                            </Text>
                        </View>
                        <View>
                            <Text style={{ color: 'gray', fontSize: 14, textAlign: 'center' }}>
                                Share your key if you want to add Members
                                </Text>
                        </View>

                    </View>
                    
                    <View style={{marginLeft: -15}}>
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
export default connect(mapStateToProps)(AdminRights);

// export default Groups;