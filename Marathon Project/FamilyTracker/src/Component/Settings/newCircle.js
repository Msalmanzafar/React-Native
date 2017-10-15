import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Content, Item, Form, Label, Input } from 'native-base'
import { Card, CardSection, Spinner, Button } from '../Common';
import { CreateNewGroup } from '../../Action/circle-Action';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    setting: {
        marginTop: 140,
        flex: 1,
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'

    }
})
class NewCircle extends Component {
    componentWillMount() {
        console.disableYellowBox = true
    }
    state = {
        groupName: '',
    };

    CreateGroup() {
        let groupName = this.state.groupName;
        let group={
            Gname: groupName,
        }
        this.props.CreateNewGroup(group);
    }
    render() {
        const{
            loader
        } = this.props;
        return (
            <View style={styles.setting}>
                <Container>
                    <Content>
                        <Form>
                            <Item stackedLabel last>
                                <Label>Group Name</Label>
                                <Input
                                    value={this.state.groupName}
                                    onChangeText={groupName => this.setState({ groupName })}
                                />
                            </Item>
                            <CardSection>
                                {(!this.props.loader) ? (
                                    <Button onPress={this.CreateGroup.bind(this)} >
                                        Create Group
                                        </Button>
                                ) : (
                                        <Spinner size='large' />
                                    )}
                            </CardSection>
                        </Form>
                    </Content>
                </Container>

            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        loader: state.NewGroupReducers.loading,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        CreateNewGroup: (group) => {
            dispatch(CreateNewGroup(group));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCircle);
// export default NewCircle;