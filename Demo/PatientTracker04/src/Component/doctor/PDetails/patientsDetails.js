import React, { Component } from 'react';
import { View, StyleSheet,Alert,TouchableOpacity } from 'react-native';
// import { Card, CardSection  } from '../../Common'
import { Container,Content,Label, Item,Icon, Input, Button,List,SwipeRow, ListItem, Thumbnail, Text, Body } from 'native-base';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';

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
        
        let Details= Object.keys(Detail).map(function(key, i) {
                var value = Detail[key];
                console.log(value)
                return(<SwipeRow
                  key={i}
                  leftOpenValue={75}
                  rightOpenValue={-75}
                  left={
                    <Button full onPress={() => alert(
                      "NAME:  " + val.name + "\n" + "TREATMENT:  " + val.treatment + "\n" + "DISEASE:  " + val.disease + '\n' + "DATE:  " + val.date
                    )}>
                      <Icon active name="information-circle" />
                    </Button>
                  }
                  body={
                    <View >
                      <Text>{value.PName}</Text>
                    </View>
                  }
                  right={
                    <Button danger >
                      <Icon active name="trash" />
                    </Button>
                  }
                />)
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
                     {Details} 
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


