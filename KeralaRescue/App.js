import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Switch,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      numberOfPeople: "",
      latitude: "",
      longitude: "",
      address: "",
      landmark: "",
      medicalEmergency: false,
      medicalReason: "",
      keyboardVerticalOffset: Platform.OS === 'ios' ? 0 : 0,
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
       (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
       },
       (error) => console.warn(error.message),
       { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
 }

  needMedical = (e) => {
    this.setState({
      medicalEmergency: e,
    });
  }

  sendRequest = () => {
    console.warn(this.state);
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#014c8d' }}>
      <StatusBar
          backgroundColor="#b8e0fa"
          barStyle="light-content"
      />
        <KeyboardAvoidingView behavior='padding'>
        <ScrollView>
        <View style={{backgroundColor: '#F5FCFF', justifyContent: 'center', alignItems: 'center',}}>
          <Text style={{fontSize: 25, fontWeight: 'bold',paddingTop: 20, paddingBottom: 20,}}>Kerala Flood Rescue</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>Name</Text>
          <View style={{ borderBottomWidth: 1, borderColor: '#000000' }}>
            <TextInput
              style={{ height: 40, width: '80%', marginLeft: 10, }}
              placeholder="Provide your Full Name"
              placeholderTextColor='#8c8c8c'
              autoCapitalize='none'
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({ name: text })}
              value={this.state.name}
            />
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.welcome}>Number of People</Text>
          <View style={{ borderBottomWidth: 1, borderColor: '#000000' }}>
            <TextInput
              style={{ height: 40, width: '80%', marginLeft: 10, }}
              placeholder="Number of People to be Rescued"
              placeholderTextColor='#8c8c8c'
              keyboardType={'numeric'}
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({ numberOfPeople: text })}
              value={this.state.numberOfPeople}
            />
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.welcome}>Address</Text>
          <View style={{ borderBottomWidth: 1, borderColor: '#000000' }}>
            <TextInput
              style={{ height: 40, width: '80%', marginLeft: 10, }}
              placeholder="Address of your current Location"
              placeholderTextColor='#8c8c8c'
              autoCapitalize='none'
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({ address: text })}
              value={this.state.address}
            />
          </View>
        </View>
        
        <View style={styles.container}>
          <Text style={styles.welcome}>Identifiable Landmark</Text>
          <View style={{ borderBottomWidth: 1, borderColor: '#000000' }}>
            <TextInput
              style={{ height: 40, width: '80%', marginLeft: 10, }}
              placeholder="Any nearby Identifiable Landmark"
              placeholderTextColor='#8c8c8c'
              autoCapitalize='none'
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({ landmark: text })}
              value={this.state.landmark}
            />
          </View>
        </View>

        <View style={styles.container}>
          <View style={{ flexDirection: 'row',justifyContent: 'space-between', borderBottomWidth: 1, borderColor: '#000000', paddingTop: 10, paddingBottom: 10, }}>
            <Text style={styles.welcome}>Medical Emergency</Text>
            <Switch
              onValueChange={this.needMedical}
              value={this.state.medicalEmergency}
              style={{marginRight: 30, marginTop: 10, marginBottom: 10,}}
            />
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.welcome}>Medical Reason</Text>
          <View style={{ borderBottomWidth: 1, borderColor: '#000000' }}>
            <TextInput
              style={{ height: 40, width: '80%', marginLeft: 10, }}
              placeholder="Please describe the Medical Issue"
              placeholderTextColor='#8c8c8c'
              autoCapitalize='none'
              underlineColorAndroid="transparent"
              onChangeText={(text) => this.setState({ medicalReason: text })}
              value={this.state.medicalReason}
            />
          </View>
        </View>
      
        <View style={{flex:1, alignItems: 'center', marginTop: 15,}}>
            <TouchableOpacity style={{width: '95%', height: 50, borderRadius: 10, backgroundColor: '#F5FCFF', justifyContent: 'center', alignItems: 'center',}} onPress={() => {this.sendRequest()}}>
              <Text style={{fontSize: 20, fontWeight: 'bold',}}>Submit</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
});
