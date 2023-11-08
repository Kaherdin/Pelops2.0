import { Formik, FormikConfig, FormikValues } from "formik";
import { PropsWithChildren } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { Button } from "components/Button";

import { GFormContext, GFormProps } from "./GForm.props";
import SubmitButton from "./components/SubmitButton";
import TextInput from "./components/TextInput";

GForm.SubmitButton = SubmitButton;
GForm.TextInput = TextInput;

export default function GForm<Values extends FormikValues = FormikValues>({
  submitTx = "common.submit",
  submitText,
  submitIcon,
  containerStyle,
  children,
  ...props
}: PropsWithChildren<FormikConfig<Values> & GFormProps>) {
  const submitButtonProps = { tx: submitTx, text: submitText };
  return (
    <Formik validateOnChange={false} {...props}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        validateField,
        setFieldError,
      }) => (
        <View style={containerStyle}>
          <GFormContext.Provider
            value={{
              handleChange,
              handleSubmit,
              handleBlur,
              setFieldValue,
              values,
              errors,
              validateField,
              setFieldError,
            }}
          >
            {children}
          </GFormContext.Provider>
        </View>
      )}
    </Formik>
  );
}
