import React from 'react';
import { Text, View } from 'react-native'
import { Card, CardSection } from '../Common'


class About extends React.PureComponent {
    render() {
        return (
            <View style={{ marginTop: 30 }}>
                <Card>
                    <CardSection>
                        <Text style={{fontSize: 16, textAlign: 'justify'}}>
                            We propose to develop an Android and iOS application to aid
                            in dispensary patient data management and viewing. The
                            system is aimed to help doctors to enter as well as view
                            patient history as well as other patient details. Our system is
                            a standalone system that can be installed on doctor Android
                            or iOS phone to be used for further login. On installation the
                            application allows a doctor to open application and enter the
                            details of any patient that used his service. The application
                            allows doctor to insert various data fields regarding a patient
                            including patient name, disease, medication provided, date of
                            arrival, cost etc.
                        </Text>
                    </CardSection>
                </Card>
            </View>
        );
    }
};


export default About;