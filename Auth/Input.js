import { View, Text, TextInput, StyleSheet } from 'react-native';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
    width: 300
  },
  label: {
    color: 'white',
    marginBottom: 4,
  },
  labelInvalid: {
    color: 'white',
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: '#F5F5DC',
    borderRadius: 4,
    fontSize: 16,
  },
  inputInvalid: {
    backgroundColor: '#FFFFC9',
  },
});