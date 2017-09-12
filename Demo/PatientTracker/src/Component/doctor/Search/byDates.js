import React, { Component } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import {
    Container, Content, Input, Button, Item, SwipeRow, Spinner,Text
} from 'native-base';
import { connect } from 'react-redux';
import { SearchByDateAction } from '../../../Action/SearchAction'


class SearchByDates extends Component {
    state={
        Search: '',
    }
    SearchWithDates(){
        let Search = this.state.Search;
        this.props.SearchByDateAction(Search);
    }
    ViewDetails(){
        Alert.alert("ViewDetails",index);
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
                            <Button onPress={this.SearchWithDates.bind(this)} info>
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