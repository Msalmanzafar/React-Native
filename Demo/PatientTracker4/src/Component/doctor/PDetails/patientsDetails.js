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
    SearchByDate(){
        Actions.searchbydates();
    }
    SearchByNames(){
        Actions.searchbynames();
    }
    ViewDetails(key) {
        Alert.alert('View Key', key);
    }
    render() {
        const {
            Detail,
            loader,
            SearchDate,
            Searching
        } = this.props;
        // console.log("details", Detail)
        
        let DetailData = Object.keys(Detail).map((key, index) => {
            let v = Detail[key];
            return (
                <SwipeRow
                    key={index}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    style={{ margin: 5, paddingLeft: 3 }}
                    left={
                        <Button success onPress={this.ViewDetails.bind(this, index)}>
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
                        <Item last>
                            <Button onPress={this.SearchByDate.bind(this)} info>
                                <Text>Search By Date</Text>
                            </Button>
                            <Button onPress={this.SearchByNames.bind(this)} info>
                                <Text>Search By Name</Text>
                            </Button>
                        </Item>
                        {(loader === true) ? (
                            <Spinner color='green' />
                        ) : (
                                <Item>
                                    {(Searching === true) ? (
                                        <ScrollView>
                                            {SearchByDates}
                                        </ScrollView>
                                    ) : (
                                            <ScrollView>
                                                {DetailData}
                                            </ScrollView>
                                        )}
                                </Item>

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
        SearchDate: state.SearchReducers.SearchDate,
        Searching: state.SearchReducers.Detail,
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

