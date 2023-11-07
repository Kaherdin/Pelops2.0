import { SafeAreaView, KeyboardAvoidingView, ScrollView } from "react-native";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuth } from "context/AuthContext";
import { AuthNavigatorParamList } from "navigators/AuthStack/AuthStack";
import { GButton } from "components/Button";
import { PinOutline } from "assets/svg";
import { Icon } from "components/Icon";
import Text from "components/Text/Text";
import Button from "components/Button/Button";

type Props = NativeStackScreenProps<AuthNavigatorParamList, "login">;

export function LoginScreen({ navigation }: Props) {
  const { loginContext, setUser } = useAuth();
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <KeyboardAvoidingView style={styles.main}> */}
        <KeyboardAvoidingView>
          <Icon icon={PinOutline} preset="title" />
          <Text tx="loginScreen.title" preset="header" marginTop={51} />
          {/* <FormFromData
            formAction={loginContext}
            btnText={i18n.t("loginScreen.logInBtn")}
            formFields={formFields}
            btnStyle={"primary"}
            forgetPassword={true}
          />
          <Button
            label={i18n.t("loginScreen.signIn")}
            onPress={() =>
              navigation.navigate({
                name: "registration",
                params: { strategy: AuthStrategy.LOCAL },
              })
            }
            outlined
            color="primary"
            sx={styles.buttonOutline}
          /> */}
          <GButton onPress={() => setUser("dsada")} label="test" />
          <Button onPress={() => setUser("dsada")} text="test" />
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
