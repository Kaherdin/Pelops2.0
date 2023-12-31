import { TouchableOpacity } from "react-native";
import { ButtonProps } from "./button.props";
import { Text } from "components/Text";
import { presets } from "./button.presets";
import { Icon } from "components/Icon";
import { buttonSize, color as themeColor, icon as iconSize } from "theme";

export function Button(props: ButtonProps) {
  const {
    icon,
    iconPosition = "right",
    iconScale = 1,
    preset = "default",
    tx,
    txOptions,
    text,
    textPreset = "button",
    textStyle,
    style,
    rounded = false,
    size = "md",
    color = "primary",
    ...rest
  } = props;

  const textProps = { tx: tx, txOptions: txOptions, text: text, preset: textPreset };
  const roundStyle = rounded
    ? { width: buttonSize[size ?? "md"], height: buttonSize[size ?? "md"], borderRadius: 100 }
    : {};
  const buttonStyle = [presets[preset](color), roundStyle, style];
  const textStyles = [preset === "outlined" ? { color: themeColor[color] } : {}, textStyle];

  function ButtonIcon() {
    if (icon === undefined) return null;
    return <Icon icon={icon} size={iconScale * iconSize[size]} preset="button" />;
  }

  return (
    <TouchableOpacity style={buttonStyle} {...rest}>
      {icon !== undefined && iconPosition === "left" && <ButtonIcon />}
      {(tx !== undefined || text !== undefined) && <Text {...textProps} size={size} style={textStyles} />}
      {icon !== undefined && iconPosition === "right" && <ButtonIcon />}
    </TouchableOpacity>
  );
}
