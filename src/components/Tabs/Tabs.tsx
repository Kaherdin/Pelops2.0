import { View, ViewStyle } from "react-native";
import { PropsWithChildren, useState } from "react";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { TabContext, TabsProps } from "./Tabs.props";
import { color } from "theme";
import { TabsBody } from "./components/Body";
import { TabsGroup } from "./components/Group";
import { TabsHeader } from "./components/Header";

Tabs.Header = TabsHeader;
Tabs.Group = TabsGroup;
Tabs.Body = TabsBody;

export function Tabs(props: PropsWithChildren<TabsProps>) {
  const { children, selected, handleSelect, style } = props;
  const [values, setValues] = useState<any[]>([]);

  const addValue = (val: any) => {
    setValues((prev) => {
      if (prev.includes(val)) return prev;
      return [...prev, val];
    });
  };

  function gestureHandler(event: any) {
    if (event.nativeEvent.state !== State.ACTIVE) return;
    const translationX = event.nativeEvent.translationX;
    const index = values.indexOf(selected);
    if (translationX < +20 && index !== values.length - 1) handleSelect(values[index + 1]);
    else if (translationX > -20 && index !== 0) handleSelect(values[index - 1]);
  }

  return (
    <PanGestureHandler onHandlerStateChange={gestureHandler}>
      <View style={[main, style]}>
        <TabContext.Provider value={{ selected, handleSelect, addValue }}>
          {children}
        </TabContext.Provider>
      </View>
    </PanGestureHandler>
  );
}

const main = {
  backgroundColor: color.background,
  display: "flex",
  flexDirection: "column",
  height: "100%",
  flexShrink: 1,
} as ViewStyle;
