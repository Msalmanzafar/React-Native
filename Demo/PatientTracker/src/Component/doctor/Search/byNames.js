import React, { Component } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import {
    Container, Content, Input, Button, Item, SwipeRow, Spinner,Text
} from 'native-base';
import { connect } from 'react-redux';
import { SearchByNamesAction } from '../../../Action/SearchByNames'


class SearchByNames extends Component {
    state={
        Search: '',
    }
    SearchPatient(){
        let Search = this.state.Search;
        this.props.SearchByNamesAction(Search);
    }
    ViewDetails(index){
        Alert.alert("index",index)
    }
    render() {
        const{
            SearchName,
            loader
        } = this.props;

        let SearchBy = Object.keys(SearchName).map((key, index) => {
            let v = SearchName[key];
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
                            <Button onPress={this.SearchPatient.bind(this)} info>
                                <Text>Search</Text>
                            </Button>
                        </Item>
                        {(loader === true) ? (
                            <Spinner color='green' />
                        ) : (
                                <ScrollView>
                                    {SearchBy}
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
        SearchName: state.SearchReducers.SearchNames,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        SearchByNamesAction: (Search) => {
            dispatch(SearchByNamesAction(Search));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchByNames);
// export default SearchByNames;