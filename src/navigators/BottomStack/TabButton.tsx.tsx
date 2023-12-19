import { Icon } from "components/Icon";
import { useEffect, useRef, useState } from "react";
import { TouchableOpacity, ViewStyle, View } from "react-native";

import * as Animatable from "react-native-animatable";
import { buttonSize, color } from "theme";

import { BottomNavPropsType } from "./BottomNavProps";

export interface TabButtonProps {
  tab: BottomNavPropsType;
  onPress?: any;
  accessibilityState?: any;
  isLast: boolean;
}

export default function TabButton({ tab, onPress, accessibilityState, isLast }: TabButtonProps) {
  const focused = accessibilityState.selected;
  const viewRef = useRef<any>(null);
  const [hasFocus, setFocus] = useState(false);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: 1.1 }, 1: { scale: 1.1 } });
      setFocus(true);
    } else {
      viewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 1 } });
      setFocus(false);
    }
  }, [focused]);

  return (
    <View style={container}>
      <TouchableOpacity onPress={onPress} style={[button, hasFocus ? selected : {}]}>
        <Animatable.View ref={viewRef}>
          <Icon icon={tab.icon} color="white" size={30} />
        </Animatable.View>
      </TouchableOpacity>
      {!isLast && <View style={separator} />}
    </View>
  );
}

const container = {
  position: "relative",
  flex: 1,
  alignItems: "center",
} as ViewStyle;

const button = {
  alignItems: "center",
  justifyContent: "center",
  height: buttonSize.xxl,
  width: buttonSize.xxl,
} as ViewStyle;

const separator = {
  backgroundColor: color.grey600,
  height: 24,
  width: 2,
  position: "absolute",
  right: -1,
  top: 20,
  borderRadius: 5,
} as ViewStyle;

const selected = {
  backgroundColor: color.primary,
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
} as ViewStyle;
