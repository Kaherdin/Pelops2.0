import { StyleProp, TextStyle, TouchableOpacityProps, ViewProps, ViewStyle } from "react-native";
import { ButtonPresets } from "./button.presets";
import i18n from "i18n-js";
import { TextPresets } from "components/Text/text.presets";
import { SVGAttributes } from "react";
import { ButtonSizeTypes, ThemeColorType } from "theme";

export interface ButtonProps extends TouchableOpacityProps {
  // text passed to Text component
  tx?: i18n.Scope;
  txOptions?: i18n.TranslateOptions;
  text?: string;
  textPreset?: TextPresets;
  textStyle?: TextStyle;
  // icon props
  iconPosition?: "left" | "right";
  icon?: React.FunctionComponent<SVGAttributes<SVGElement>>;
  iconScale?: number;
  preset?: ButtonPresets;
  rounded?: boolean;
  // size of rounded button
  size?: ButtonSizeTypes;
  // styles override
  style?: StyleProp<ViewStyle>;
  color?: ThemeColorType;
}
