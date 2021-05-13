import React, { FC, useRef, useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const JumpInput: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const inputOne = useRef<TextInput>(null);
  const inputTwo = useRef<TextInput>(null);
  const inputThree = useRef<TextInput>(null);
  const inputFour = useRef<TextInput>(null);

  const clearInput = () => {
    setIsLoading(true);
    Keyboard.dismiss();
    setTimeout(() => {
      inputOne.current?.clear();
      inputTwo.current?.clear();
      inputThree.current?.clear();
      inputFour.current?.clear();
      setIsLoading(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.childCont}>
        <View style={styles.inputs}>
          <View style={styles.inputCont}>
            <TextInput
              placeholder={"0000"}
              style={styles.input}
              maxLength={4}
              keyboardType="numeric"
              ref={inputOne}
              onChangeText={(text) =>
                text.length >= 4 && inputTwo.current?.focus()
              }
            />
          </View>
          <View style={styles.inputCont}>
            <TextInput
              placeholder={"0000"}
              style={styles.input}
              maxLength={4}
              keyboardType="numeric"
              ref={inputTwo}
              onChangeText={(text) =>
                text.length >= 4 && inputThree.current?.focus()
              }
            />
          </View>
          <View style={styles.inputCont}>
            <TextInput
              placeholder={"0000"}
              style={styles.input}
              maxLength={4}
              keyboardType="numeric"
              ref={inputThree}
              onChangeText={(text) =>
                text.length >= 4 && inputFour.current?.focus()
              }
            />
          </View>
          <View style={[styles.inputCont, { marginRight: 0 }]}>
            <TextInput
              placeholder={"0000"}
              style={styles.input}
              maxLength={4}
              keyboardType="numeric"
              ref={inputFour}
              onChangeText={(text) => text.length >= 4 && clearInput()}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => clearInput()}>
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>CONFIRM</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: { color: "#FFF" },
  button: {
    width: 104,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3F4ED3",
    borderRadius: 8,
  },
  inputs: { flexDirection: "row", marginBottom: 24 },
  childCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputCont: {
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  input: { backgroundColor: "transparent", fontSize: 20 },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default JumpInput;
