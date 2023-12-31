import { Chat, Home, Notif, Pin, PinOutline, User } from "assets/svg";
import { translate } from "i18n";
import { NavType } from "navigators/NavType";
import { SVGAttributes } from "react";
import { ChatScreen } from "screens";
import ActivitiesScreen from "screens/ActivitiesScreen/ActivitiesScreen";
import DesignSystemScreen from "screens/DesignSystemScreen/DesignSystemScreen";
import MapScreen from "screens/MapScreen/MapScreen";
import { ChannelUserItem } from "types/message";

export interface BottomNavPropsType extends NavType<BottomTabParamList> {
  icon: React.FunctionComponent<SVGAttributes<SVGElement>>;
  tabBarBadge: number;
  iconSize: number;
  label: string;
}

export type BottomTabParamList = {
  map: { region?: { latitude: number; longitude: number } };
  activities: undefined;
  designSystem: undefined;
  profile: { user: any };
  messages: { channelUser: ChannelUserItem };
};

//TODO: change icons from png to svg
export const BottomNavProps: BottomNavPropsType[] = [
  {
    id: 1,
    route: "map",
    label: `${translate("screenTitle.pelops")}`,
    icon: Home,
    tabBarBadge: 0,
    iconSize: 26,
    component: MapScreen,
  },
  {
    id: 2,
    route: "activities",
    label: `${translate("screenTitle.activity")}`,
    icon: PinOutline,
    tabBarBadge: 0,
    iconSize: 26,
    component: ActivitiesScreen,
  },
  {
    id: 5,
    route: "messages",
    label: `${translate("screenTitle.messages")}`,
    icon: Chat,
    tabBarBadge: 0,
    iconSize: 26,
    component: ChatScreen,
  },
  {
    id: 6,
    route: "designSystem",
    label: `${translate("screenTitle.designSystem")}`,
    icon: Notif,
    tabBarBadge: 0,
    iconSize: 26,
    component: DesignSystemScreen,
  },
  // {
  //   id: 3,
  //   route: "profile",
  //   label: `${i18n.t("screenTitle.profil")}`,
  //   icon: User,
  //   tabBarBadge: 0,
  //   iconSize: 26,
  //   component: ProfileScreen,
  // },
];
