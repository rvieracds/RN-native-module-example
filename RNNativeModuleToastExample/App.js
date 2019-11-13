import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ToastLibraryRviera from 'react-native-toast-library-rviera';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: 'NATIVE MODULE INTEGRATED!'};
  }
  render() {
    console.log('ToastLibraryRviera ', ToastLibraryRviera);

    return (
      <View style={styles.container}>
        <Text>Please enter text</Text>
        <TextInput
          style={{margin: 10}}
          multiline={true}
          placeholder="Type text to display in toast"
          onChangeText={text => this.setState({text})}
        />
        <Button
          onPress={() => {
            ToastLibraryRviera.show(this.state.text);
          }}
          title="Show Toast"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
