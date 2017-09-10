import React, { Component } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import {
    Container, Content, Input, Button, Item, SwipeRow, Spinner
} from 'native-base';
import { connect } from 'react-redux';


class SearchByNames extends Component {
    state={
        Search: '',
    }
    SearchPatient(){
        let Search = this.state.Search;
    }
    render() {
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
                            <Button onPress={this.SearchPatient.bind(this)} info>
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

export default SearchByNames;