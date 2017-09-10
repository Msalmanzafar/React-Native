import React, { Component } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import {
    Container, Content, Input, Button, Item, SwipeRow, Spinner
} from 'native-base';
import { connect } from 'react-redux';
import { SearchByDate } from '../../../Action/SearchAction'


class SearchByDates extends Component {
    state={
        Search: '',
    }
    SearchWithDates(){
        let Search = this.state.Search;
        this.props.SearchByDate(Search);
    }
    render() {
        const {
            SearchDate,
        } = this.props;
        let SearchByDates = Object.keys(SearchDate).map((key, index) => {
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
        })
        return (
            <View>
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
                                    {SearchByDates}
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
        SearchDate: state.SearchReducers.SearchDate,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SearchByDate: (Search) => {
            dispatch(SearchByDate(Search));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchByDates);
// export default SearchByDates;