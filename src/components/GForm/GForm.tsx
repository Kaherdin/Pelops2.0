import { Formik, FormikConfig, FormikValues } from "formik";
import { PropsWithChildren } from "react";

import { GFormContext, GFormProps } from "./GForm.props";
import SubmitButton from "./components/SubmitButton";
import TextInput from "./components/TextInput/TextInput";
import NumberPicker from "./components/NumberPicker";
import Radio from "./components/Radio";
import Switch from "./components/Switch";
import DateTimePicker from "./components/DateTimePicker";
import DropPicker from "./components/DropPicker";
import AddressPicker from "./components/AddressPicker/AddressPicker";

GForm.SubmitButton = SubmitButton;
GForm.TextInput = TextInput;
GForm.NumberPicker = NumberPicker;
GForm.Radio = Radio;
GForm.Switch = Switch;
GForm.DateTimePicker = DateTimePicker;
GForm.DropPicker = DropPicker;
GForm.AddressPicker = AddressPicker;

export default function GForm<Values extends FormikValues = FormikValues>({
  submitTx = "common.submit",
  submitText,
  submitIcon,
  containerStyle,
  children,
  themeColor,
  ...props
}: PropsWithChildren<FormikConfig<Values> & GFormProps>) {
  const submitButtonProps = { tx: submitTx, text: submitText };
  return (
    <Formik validateOnChange={false} {...props}>
      {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, validateField, setFieldError }) => (
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
            themeColor,
          }}
        >
          {children}
        </GFormContext.Provider>
      )}
    </Formik>
  );
}
