import React, { Component } from 'react';
import { View, StyleSheet,Alert,TouchableOpacity } from 'react-native';
// import { Card, CardSection  } from '../../Common'
import { Container,Content,Label, Item, Input, Button,List, ListItem, Thumbnail, Text, Body } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// import Logos from '../images/doctor.png'

// const styles = StyleSheet.create({
//   Header: {
//     backgroundColor: '',

//   }
// });

class PatientDetails extends Component {
    state={
        Search: '',
    }
    SearchPatient(){
        let Search = this.state.Search;
        Alert.alert(
            'Search',
            Search,
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')}
            ]
        )
    }
    render() {
        const {
            Detail
        } = this.props;
        console.log("details", Detail)
        let details = Detail.map((key,Index)=>{
            let val = Detail[key];
            return (
                <Container>
                    <Content>
                    <List key={Index}>
                        <ListItem>
                            <Thumbnail square size={80}  />
                            <Body>
                                <Text>{val.PName}</Text>
                                <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                    </List>
                    </Content>
                </Container>
            );
        })
        return (
            <View style={{flex:1, marginTop:5}}>
            <Container >
                <Content>
                    <Item last>
                        <Input
                            placeholder='Search'
                            value={this.state.Search}
                            onChangeText={Search => this.setState({ Search })}
                        />
                        <Button onPress={this.SearchPatient.bind(this)} info>
                            <Text>Search</Text>
                        </Button>
                    </Item>
                    {details}
                </Content>
            </Container >
            </View>
                        
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Detail: state.DetailsReducers.PatientsDetails,
        // ErrorMessage: state.AuthReducer.ErrorMess,
        // loader: state.AuthReducer.loading,
    };
}
export default connect(mapStateToProps)(PatientDetails);
// export default Doctor;