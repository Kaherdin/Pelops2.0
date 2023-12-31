import { useContext, useEffect, useState } from "react";
import { StyleProp, TouchableOpacity, ViewStyle } from "react-native";
import { TabContext, useTabs } from "../Tabs.props";
import { color } from "theme";
import { Text } from "components/Text";
import i18n from "i18n-js";

type TabsHeaderProps = {
  value: any;
  tx?: i18n.Scope;
  text?: string;
  txOptions?: i18n.TranslateOptions;
  containerStyle?: StyleProp<ViewStyle>;
};

export function TabsHeader(props: TabsHeaderProps) {
  const { value, tx, txOptions, text, containerStyle } = props;
  const { selected, handleSelect } = useContext(TabContext);
  const { addValue } = useTabs();
  const textProps = { tx, txOptions, text };
  const [active, setActive] = useState(selected === value);

  useEffect(() => {
    addValue(value);
  }, []);

  useEffect(() => {
    setActive(selected === value);
  }, [selected]);

  return (
    <TouchableOpacity
      style={[tab, active ? selectedTab : {}, containerStyle]}
      onPress={() => handleSelect(value)}
    >
      <Text {...textProps} preset={active ? "tabHeaderActive" : "tabHeader"} />
    </TouchableOpacity>
  );
}

const tab = {
  flex: 1,
  borderBottomWidth: 2,
  borderBottomColor: color.grey200,
} as ViewStyle;

const selectedTab = {
  borderBottomColor: color.white,
} as ViewStyle;
