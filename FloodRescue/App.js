import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      englishTab: true,
      malayalamTab: false,
      activeText: {

      },
      malayalamText: {
          heading: "അറിയിപ്പ്",
          description: "പ്രളയ ബാധിതർ സഹായം  തേടാൻ  താഴെ കാണുന്ന വലിയ കറുത്ത ബട്ടണിൽ അമർത്തുക. നിങ്ങളുടെ  ലൊക്കേഷനും  മറ്റു അത്യാവശ്യ വിവരങ്ങളും ദുരന്ത നിവാരണ സേനയിലേക്ക് ഉടൻ കൈമാറപ്പെടും.",
          subDescription: "ഇന്റർനെറ്റ് സംവിധാനം ഇല്ലാത്തവർ താഴെ കാണുന്ന നമ്പറിലേക്ക് വിളിക്കുക",
          phoneNumbers: "1070, 1074, 1077",
          buttonText: "സഹായം തേടുക",
          subFooter: "Your Current Location",
      },
      englishText: {
          heading: "Notice",
          description: "Please use the black button below to share your location and other important information with the rescue authorities incase of emergency.",
          subDescription: "In case of no internet connectivity please call to one of these numbers to get help.",
          phoneNumbers: "1070, 1074, 1077",
          buttonText: "GET HELP",
          subFooter: "Your Current Location.",
      },
    }

  }

  componentDidMount(){
    this.setState({
      activeText: this.state.englishText,
    });
  }

  renderLanguage = (lan) => {
    if(lan == "eng"){
      this.setState({
        activeText: this.state.malayalamText,
        malayalamTab: true,
        englishTab: false,
      });
    }
    else{
      this.setState({
        activeText: this.state.englishText,
        englishTab: true, 
        malayalamTab: false,
      });
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }}>
      {/* status bar code */}
        <StatusBar
          backgroundColor="#b8e0fa"
          barStyle="light-content"
        />
        <View style={styles.container}>
          {/* Header tabs */}
          <TouchableOpacity style={[{ width: '45%', height: 50, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 25, borderBottomLeftRadius: 25, borderWidth: 1, borderColor: '#000000', }, this.state.malayalamTab ? {backgroundColor: '#000000'} : {backgroundColor: '#ffffff'}]} onPress={() => {this.renderLanguage('eng')}}>
            <Text style={[{ fontSize: 20, }, this.state.malayalamTab ? {color: '#ffffff',} : {color: '#000000'}]}>മലയാളം</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{ width: '45%', height: 50, justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 25, borderTopRightRadius: 25, borderWidth: 1, borderColor: '#000000', }, this.state.englishTab ? {backgroundColor: '#000000'} : {backgroundColor: '#ffffff'}]} onPress={() => {this.renderLanguage('mal')}}>
            <Text style={[{ fontSize: 20, }, this.state.englishTab ? {color: '#ffffff',} : {color: '#000000'}]}>English</Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: '#ffffff',}}>
            {/* code for heading */}
            <View style={{paddingTop: 20, paddingBottom: 20,}}>
              <Text style={{fontSize: 30, fontWeight: 'bold',}}>{this.state.activeText.heading}</Text>
            </View>

            {/* code for description */}
            <View style={{padding: 5,}}>
              <Text style={{fontSize: 20, fontWeight: 'bold',textAlign: 'center',}}>
                {this.state.activeText.description}
              </Text>
            </View>

            {/* code for sub description */}
            <View style={{padding: 15,}}>
              <Text style={{fontSize: 15,textAlign: 'center',}}>
                {this.state.activeText.subDescription}
              </Text>
            </View>

            {/* code for phone numbers. */}
            <View style={{padding: 10,}}>
              <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center', color: 'red',}}>
                1070, 1074, 1077
              </Text>
            </View>

            {/* code for help button */}
            <View style={{flex: 1,width:'95%', paddingTop: 20, paddingBottom: 20, }}>
              <TouchableOpacity style={{ height: 50, backgroundColor: '#000000', borderRadius: 25,justifyContent: 'center', alignItems: 'center',}}>
                <Text style={{fontSize: 25, color: '#ffffff',}}>
                  {this.state.activeText.buttonText}
                </Text>
              </TouchableOpacity>
            </View>

            {/* footer but one text */}
            <View style={{paddingTop: 20,}}>
              <Text style={{fontSize: 18,textAlign: 'center',}}>
                {this.state.activeText.subFooter}
              </Text>
            </View>

            {/* Footer text */}
            <View style={{padding: 15,}}>
              <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center',}}>
                Panamaram, Wayanad
              </Text>
            </View>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingTop: 20,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
});
