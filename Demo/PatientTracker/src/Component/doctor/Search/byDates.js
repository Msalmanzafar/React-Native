import React, { Component } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import {
    Container, Content, Input, Button, Item, SwipeRow, Spinner, Text
} from 'native-base';
import { connect } from 'react-redux';
import { SearchByDateAction } from '../../../Action/SearchAction'
import DatePicker from 'react-native-datepicker';

class SearchByDates extends Component {
    state = {
        Search: '01-08-2017',
    }
    SearchWithDates() {
        let Search = this.state.Search;
        this.props.SearchByDateAction(Search);
    }
    render() {
        const {
            SearchDate,
            loader
        } = this.props;
        let SearchByDate = Object.keys(SearchDate).map((key, index) => {
            let v = SearchDate[key];
            return (
                <SwipeRow
                    key={index}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                    style={{ margin: 5, paddingLeft: 3 }}
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
                        <View >
                            <Text> {v.PName}</Text>
                        </View>
                    }
                />
            )
        })
        return (
            <View style={{ flex: 1, marginTop: 5 }}>
                <Container>
                    <Content>
                        <Item last>
                            <DatePicker
                                style={{ width: 250 }}
                                date={this.state.Search}
                                mode="date"
                                placeholder="select date"
                                format="DD-MM-YYYY"
                                minDate="01-08-2017"
                                maxDate="01-06-2022"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36
                                    }
                                }}
                                onDateChange={(Search) => { this.setState({ Search: Search }) }}
                            />
                            <Button style={{ marginLeft: 15 }} onPress={this.SearchWithDates.bind(this)} info>
                                <Text>Search</Text>
                            </Button>
                        </Item>
                        {(loader === true) ? (
                            <Spinner color='green' />
                        ) : (
                                <ScrollView>
                                    {SearchByDate}
                                </ScrollView>
                            )}
                    </Content>
                </Container>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loader: state.DetailsReducers.Loader,
        SearchDate: state.SearchReducers.SearchDates,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SearchByDateAction: (Search) => {
            dispatch(SearchByDateAction(Search));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchByDates);
// export default SearchByDates;