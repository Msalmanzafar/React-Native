import React, { Component } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import {
  Container, Content, Input, Button, Item, SwipeRow, Spinner, Text
} from 'native-base';
import { Card, CardSection, Header } from '../Common'
// import { LogOutAction } from '../../Action/auth-action'
// import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class MapHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Location: ''
    }
  }
  // LoactionFind() {

  // }

  // logOut() {
  //     this.props.LogOutAction()
  // }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Tourist Guide' />
        {/* <Container style={{ marginTop: 6,  }}>
          <Content>
            <Item last>
              <Input
                placeholder='find out'
                value={this.state.Location}
                onChangeText={Location => this.setState({ Location })}
              />
              <Button onPress={this.LoactionFind.bind(this)} info>
                <Text>Search</Text>
              </Button>
            </Item>
          </Content>
        </Container> */}
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
          >
          </MapView>
        </View>

      </View>
    );
  }
}
// const mapStateToProps = (state) => {
//   return {
//     auth: state.AuthReducer,
//     // ErrorMessage: state.AuthReducer.ErrorMess,
//     // loader: state.AuthReducer.loading,
//   };
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     LogOutAction: () => {
//       dispatch(LogOutAction());
//     },
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(MapHome);
export default MapHome;