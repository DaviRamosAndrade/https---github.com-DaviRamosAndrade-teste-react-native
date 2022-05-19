import { KeyboardAvoidingView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

const Section = (props) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        {props.title}
      </Text>

      <TextInput
        placeholder={props.title}
        // value=''
        // onChangeText={text => }
        style={styles.input}
        secureTextEntry={props.isSecure || false}
      />
    </View>
  );
};

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      >
      <View style={styles.inputContainer}>
        <Section title="E-mail"></Section>
        <Section title="Senha" isSecure={true}></Section>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.buttonLogon}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 16,
  },
  sectionTitle: {
    color: '#445'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputContainer:{
    width: '80%'
  },
  input: {
    borderStyle: 'solid',
    borderBottomWidth: 2.0,
    borderColor: '#ccc',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginTop: 8,
    borderRadius: 4
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginSectionContainer: {
    marginTop: 24,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 32,
  },
  buttonLogon: {
    backgroundColor: '#0782f9',
    width: '100%',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  }
});

export default LoginScreen;