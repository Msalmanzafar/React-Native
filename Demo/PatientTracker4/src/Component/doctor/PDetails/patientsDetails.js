import React, { Component } from 'react';
import { View, StyleSheet,Alert } from 'react-native';
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
    tempArray = [];
    SearchPatient(){
        let Search = this.state.Search;
        
        if(Search !== null){
            for(let i=0; i < Detail.length; i++){
                if((Detail[i].PName || Detail[i].Date  ) ){
                        this.tempArray = this.tempArray.concat(firebaseData[i]);
                }
            }
        }else{
            Alert.alert(
                'Alert',
                'Please Write First',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')}
                ]
            )
        }
    }
    View(key){
        Alert.alert('View Key', key);
    }
    Trash(key){
        Alert.alert('Trash Key', key);
    }
    render() {
        const {
            Detail
        } = this.props;
        console.log("details", Detail)
        
        // let Details= Detail.map((v, i)=> {
        //         // console.log('i',i)
        //         return(
        //             <SwipeRow
        //                 key={i}
        //                 leftOpenValue={75}
        //                 rightOpenValue={-75}
                        
        //                 left={
        //                     <Button success onPress={()=>{Alert.alert(
        //                             'Patent Details',
        //                             v.PName,
        //                             {/* v.FatherName,
        //                             v.Age,
        //                             v.Date,
        //                             v.TREATMENT,
        //                             v.OPD, */}
        //                             [
        //                                 {text: 'OK', onPress: () => console.log('OK Pressed')}
        //                             ]
        //                         )}}>
        //                         <Text>View</Text>
        //                     </Button>
        //                 }
        //                 body={
        //                     <View >
        //                         <Text>{v.PName}</Text>
        //                     </View>
        //                 }
        //                 right={
        //                     <Button danger onPress={this.Trash.bind(this, i)}>
        //                         <Text>
        //                             X
        //                         </Text>
        //                     </Button>
        //                 }
        //             />
        //         )
        //     }
        // )
        // console.log('Details',Details)
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

