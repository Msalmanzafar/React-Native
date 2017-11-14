import React, { Component } from 'react';
import { View, StyleSheet, ToastAndroid, Dimensions, TouchableHighlight } from 'react-native';
import {
    Container, Content, Input, Button, Item, SwipeRow, Spinner, Text, Header, Body, Right
} from 'native-base';
import { Card, CardSection } from '../Common'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
import * as firebase from 'firebase';

// import {currentLocationAction} from '../../Action/circle-Action'

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 600,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

class TrackerMap extends Component {
    componentWillMount() {
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                // console.log(position + 'asd')
                this.setState({
                    region: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        altitude: 15.0444,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }
                });
                // console.log(position + 'asd')

                //updates loaction current User
                var user = firebase.auth().currentUser;

                if (user.email === null) {
                    ToastAndroid.show('Check Your Connection / Data.', ToastAndroid.SHORT);
                } else {
                    let CurrentUser = {
                        email: user.email,
                        id: user.uid,
                        Location: {
                            lat: this.state.region.latitude,
                            long: this.state.region.longitude
                        }
                    }
                    // console.log(CurrentUser,"CurrentUser")
                    firebase.database().ref('users/' + user.uid).set(CurrentUser);
                }
                // console.log(user)

            }

        );
    }
    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);


    }
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 24.8779738,
                longitude: 67.0686252,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
            },
        }
    }
    render() {
        const {
            Members
        } = this.props;
        // var user = firebase.auth().currentUser;
        // console.log("Group====>>", user.email)
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <MapView
                        provider="google"
                        style={styles.map}
                        showsPointOfInternet={true}
                        region={this.state.region}
                        mapType="standard"
                        zoomEnabled={true}
                        pitchEnabled={true}
                        showsBuildings={true}
                        showsTraffic={true}
                        showsIndoors={true}
                        provider="google"
                        showsUserLocation={true}
                        showsMyLocationButton={true}
                        showsCompass={true}
                        followsUserLocation={true}
                        loadingEnabled={true}
                        toolbarEnabled={true}
                        rotateEnabled={true}
                    >
                        {this.props.Members.map((v, i) => {
                            return (
                                <MapView.Marker
                                    key={i}
                                    title={v.email}
                                    coordinate={{
                                        latitude: parseFloat(v.Location.lat),
                                        longitude: parseFloat(v.Location.long),
                                    }}
                                />
                            )
                        })}
                    </MapView>
                </View>

            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Members: state.GroupsReducers.grooupMemeber

    };
}
export default connect(mapStateToProps)(TrackerMap);
// export default TrackerMap;