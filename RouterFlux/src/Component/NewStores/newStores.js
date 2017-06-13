import React from 'react';
import { View } from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import {NewStoreData} from '../../Actions/CreateStore';
import { connect } from 'react-redux';

const styles = {
    
    ButtonText:{
        fontSize: 16,
    },
    Button:{
        marginTop: 35,
    }
}

class NewStores extends React.PureComponent {
    constructor(props){
        super(props);
        this.CreateNewStore = this.CreateNewStore.bind(this);
    }
    state = {
        storeName: '',
        location: ''
    }
    CreateNewStore(){
        let storeName = this.state.storeName;
        let location = this.state.location;
        let createStores = {
            storeName: storeName,
            location: location,
        };
        // console.log("user NewStores", NewStores);
        this.props.NewStoreData(createStores);
    }
    render() {
        return (
                <Container>
                    <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Store Name</Label>
                                <Input
                                    value={this.state.storeName}
                                    onChangeText={storeName => this.setState({ storeName })}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Location</Label>
                                <Input
                                    value={this.state.location}
                                    onChangeText={location => this.setState({ location })}
                                />
                            </Item>
                                <Button style={styles.Button} block warning onPress={this.CreateNewStore}>
                                    <Text style={styles.ButtonText}>Create Store</Text>
                                </Button>
                        </Form>
                    </Content>
                </Container>
        );

    }
}

const mapStateToProps = (state) => {
    return {
        newStores: state.CreateStore.NewStoresData,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        NewStoreData: (createStores) => {
            dispatch(NewStoreData(createStores));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(NewStores);

// export default NewStores;