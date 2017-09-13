import React, { Component } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { Container, Content, Spinner, Item, Button, List, SwipeRow, Text } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


class PatientDetails extends Component {
    state = {
        Search: '',
    }
    tempArray = [];
    SearchByDates() {
        Actions.searchbydates()
    }
    SearchByNames() {
        Actions.searchbynames()
    }
    render() {
        const {
            Detail,
            loader
        } = this.props;
        // console.log("details", Detail)

        let Details = Detail.map((v, i) => {
            // console.log('i',i)
            return (
                <SwipeRow
                    key={i}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    style={{ margin: 5 }}
                    left={
                        <Button success onPress={() => {
                            alert(
                                "Patient Name: " + v.PName + "\n" +
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
                        <View style={{ paddingLeft: 5 }}>
                            <Text>{v.PName}</Text>
                        </View>
                    }

                />
            )
        }
        )
        // console.log('Details',Details)
        return (
            <View style={{ flex: 1, marginTop: 5 }}>
                <Container >
                    <Content>
                        <Item last>
                            <Button style={{ marginLeft: 23 }} onPress={this.SearchByDates.bind(this)} info>
                                <Text>Search By Date</Text>
                            </Button>
                            <Button style={{ marginLeft: 20 }} onPress={this.SearchByNames.bind(this)} info>
                                <Text>Search By Name</Text>
                            </Button>
                        </Item>
                        {(loader === true) ? (
                            <Spinner size='large' />
                        ) : (
                                <ScrollView>
                                    {Details}
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
        loader: state.DetailsReducers.Loader,
    };
}
export default connect(mapStateToProps)(PatientDetails);
// export default Doctor;
