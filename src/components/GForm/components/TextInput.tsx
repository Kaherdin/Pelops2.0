import {
  StyleProp,
  ViewStyle,
  TextInput as RNTextInput,
  TextInputProps as RnTextInputProps,
} from "react-native";
import { GFieldProps, useGForm } from "../GForm.props";
import { color } from "theme";
import { BaseField } from "./BaseField";
import { inputFieldStyle } from "theme";

export interface TextInputProps extends GFieldProps {
  inputStyle?: StyleProp<ViewStyle>;
}

export default function TextInput(props: TextInputProps & RnTextInputProps) {
  const { containerStyle, valName, tx, text, inputStyle = {}, ...rest } = props;
  const { handleBlur, values, setFieldValue } = useGForm();

  return (
    <BaseField style={containerStyle}>
      <BaseField.Label tx={tx} text={text} />
      <RNTextInput
        onChangeText={(text) => setFieldValue(valName, text)}
        onBlur={handleBlur(valName)}
        value={values[valName]}
        placeholderTextColor={color.grey100}
        style={[input, inputStyle]}
        {...rest}
      />
      <BaseField.ErrorLabel valName={valName} />
    </BaseField>
  );
}

const input = {
  ...inputFieldStyle,
} as ViewStyle;