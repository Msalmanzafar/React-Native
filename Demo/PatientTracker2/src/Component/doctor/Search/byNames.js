import React, { Component } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import {
    Container, Content, Input, Button, Item, SwipeRow, Spinner,Text
} from 'native-base';
import { connect } from 'react-redux';
import { SearchByNamesActions } from '../../../Action/SearchAction'


class SearchByNames extends Component {
    state={
        Search: '',
    }
    SearchWithNames(){
        let Search = this.state.Search;
        this.props.SearchByNamesActions(Search);
    }
    render() {
        const {
            SearchName,
            loader
        } = this.props;
        let SearchByNames = SearchName.map((v, i) => {
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
        })
        return (
            <View style={{ flex: 1, marginTop: 5 }}>
                <Container>
                    <Content>
                        <Item last>
                            <Input
                                placeholder='Search'
                                value={this.state.Search}
                                onChangeText={Search => this.setState({ Search })}
                            />
                            <Button onPress={this.SearchWithNames.bind(this)} info>
                                <Text>Search</Text>
                            </Button>
                        </Item>
                        {(loader === true) ? (
                            <Spinner color='green' />
                        ) : (
                                <ScrollView>
                                    {SearchByNames}
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
        loader: state.DetailsReducers.Loading,
        SearchName: state.SearchReducers.SearchNames,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SearchByNamesActions: (Search) => {
            dispatch(SearchByNamesActions(Search));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchByNames);
// export default SearchByDates;