import React, { Component } from 'react';

import { View, Text } from 'react-native';
import { Button, Card, EndCardSection,CardSection, Input, Spinner } from '../Common'


class NewStore extends Component {
    state={
        email:'',
        password:'',
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder='user@gmail.com'
                        label='Email:'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder='password'
                        label='Password:'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
            </Card>
        );
    }
}

export default NewStore;