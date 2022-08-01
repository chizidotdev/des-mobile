import { Text } from "@rneui/themed";
import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

interface InputProps {
  label?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  secure?: boolean;
}

const InputUI: React.FC<InputProps> = ({
  label,
  value,
  setValue,
  placeholder,
  secure,
}) => {
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputWrapper}>
        <TextInput
          // keyboardType=""
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={(text) => setValue(text)}
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="off"
          clearButtonMode="while-editing"
          enablesReturnKeyAutomatically
          secureTextEntry={secure}
          // onFocus={}
        />
      </View>
    </View>
  );
};

export default InputUI;

export const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 15,
  },
  inputWrapper: {
    marginVertical: 8,
    justifyContent: "space-evenly",
    borderColor: "#EEEEEE",
    borderWidth: 1,
    backgroundColor: "#fff",
    boxShadow: "15px 20px 45px rgba(233, 233, 233, 0.25)",
    shadowColor: "rgba(233, 233, 233, 0.25)",
    shadowOffset: { width: 15, height: 20 },
    shadowOpacity: 45,
    borderRadius: 10,
  },
  input: {
    paddingVertical: 18,
    paddingHorizontal: 14,
  },
  label: {
    color: "#9796A1",
    fontSize: 16,
  },
});
