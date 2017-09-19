import React, { Component } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import {
    Container, Content, Label, Item, Icon, Input, Button, List, SwipeRow,
    ListItem, Thumbnail, Text, Body, Spinner
} from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

// import {PatientDeleteAction} from '../../../Action/PatientDetails'


class PatientDetails extends Component {
    componentWillMount() {
        console.disableYellowBox = true
    }
    SearchByDate() {
        Actions.searchbydates();
    }
    SearchByNames() {
        Actions.searchbynames();
    }
    render() {
        const {
            Detail,
            loader,
        } = this.props;
        // console.log("details", Detail)

        // let DetailData = Object.keys(Detail).map((key, index) => {
        //     let v = Detail[key];
       let  DetailData = this.props.Detail.map((v, i) => {
            return (
                <SwipeRow
                    key={i}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    style={{ margin: 5, paddingLeft: 3 }}
                    left={
                        <Button success onPress={()=>{
                                alert(
                                    "Patient Name: " +  v.PName +  "\n" +
                                    "S/O Name: " + v.FatherName + "\n" +
                                    "Age: " + v.Age + "\n" +
                                    "Date: " + v.Date + "\n" +
                                    "Treatment: " + v.TREATMENT + "\n" +
                                    "OPD: " + v.OPD + "\n"
                                )
                            }}>
                            <Text>View</Text>
                        </Button>
                    }
                    body={
                        <View >
                            <Text> {v.PName}</Text>
                        </View>
                    }
                />
            )
        }
        )
        return (
            <View style={{ flex: 1, marginTop: 5 }}>
                <Container >
                    <Content>
                        <Item >
                            <Button style={{ marginLeft: 25 }} onPress={this.SearchByDate.bind(this)} info>
                                <Text>Search By Date</Text>
                            </Button>
                            <Button style={{ marginLeft: 20 }} onPress={this.SearchByNames.bind(this)} info>
                                <Text>Search By Name</Text>
                            </Button>
                        </Item>
                        {(loader === true) ? (
                            <Spinner color='green' />
                        ) : (
                                <ScrollView>
                                    {DetailData}
                                </ScrollView>
                            )}
                    </Content>
                </Container >
            </View>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        Detail: state.DetailsReducers.PatientsDetails,
        loader: state.DetailsReducers.Load,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        PatientDeleteAction: (IdKeys) => {
            dispatch(PatientDeleteAction(IdKeys));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PatientDetails);
// export default Doctor;

