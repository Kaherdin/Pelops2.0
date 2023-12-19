import { Star } from "assets/svg";
import GForm from "components/GForm/GForm";
import { Icon } from "components/Icon";
import { Popup } from "components/Modal";
import { Text } from "components/Text";
import { Scroll } from "components/containers/Scroll";
import { YStack } from "components/containers/Stack";
import { format } from "date-fns";
import { useState } from "react";

import { ThemeColorType } from "theme";

import ColorPicker from "./ColorPicker";
import { INFINIT_PARTICIPANTS } from "constants/global";
import { View } from "react-native";

const initialValues = {
  input: "",
  switch: false,
  number: INFINIT_PARTICIPANTS,
  radio: "item1",
  startDate: new Date(),
  endDate: new Date(),
  location: { latitude: 0, longitude: 0 },
  drop: "drop-item1",
};

const RadioItems = [
  { label: "item1", value: "item1" },
  { label: "item2", value: "item2" },
  { label: "item3", value: "item3" },
];

const DropItems = [
  { icon: () => <Icon icon={Star} />, label: "drop-item1", value: "drop-item1" },
  { icon: () => <Icon icon={Star} />, label: "drop-item2", value: "drop-item2" },
  { icon: () => <Icon icon={Star} />, label: "drop-item3", value: "drop-item3" },
];

function Line({ label, value }: { label: string; value: string }) {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text>{label}: </Text>
      <Text>{value}</Text>
    </View>
  );
}

export default function GFormTab() {
  const [color, setColor] = useState("primary" as ThemeColorType);
  const [popup, setPopup] = useState(false);
  const [values, setValues] = useState(initialValues);
  const handleSubmit = (values: any) => {
    console.log(values);
    setValues(values);
    setPopup(true);
  };

  return (
    <>
      <ColorPicker setColor={setColor} />
      <Scroll style={{ height: "90%" }}>
        <GForm initialValues={initialValues} onSubmit={handleSubmit} themeColor={color}>
          <YStack pa="sm">
            <GForm.TextInput valName="input" text="TextInput" placeholder="Placeholder" />
            <GForm.AddressPicker valName="location" placeholder="Enter address" />
            <GForm.DropPicker valName="drop" text="DropPicker" items={DropItems} searchable />
            <GForm.Switch valName="switch" text="Switch" />
            <GForm.NumberPicker valName="number" text="Number" max={1000} />
            <GForm.Radio valName="radio" text="Radio" items={RadioItems} />
            <GForm.DateTimePicker
              valNames={{ start: "startDate", end: "endDate" }}
              minDate={new Date()}
              text="DateTimePicker"
              nestedScrollEnabled
            />
            <GForm.SubmitButton text="Submit" />
          </YStack>
        </GForm>
      </Scroll>
      <Popup visible={popup} setVisible={setPopup}>
        <Text preset="header">Modal</Text>
        <Line label="TextInput" value={values.input} />
        <Line label="Switch" value={values.switch.toString()} />
        <Line label="Number" value={values.number.toString()} />
        <Line label="Radio" value={values.radio} />
        <Line label="Drop" value={values.drop} />
        <Line label="startDate" value={format(values.startDate, "dd/MM/yyyy HH:mm")} />
        <Line label="endDate" value={format(values.endDate, "dd/MM/yyyy HH:mm")} />
        <Line label="location" value={JSON.stringify(values.location)} />
      </Popup>
    </>
  );
}
