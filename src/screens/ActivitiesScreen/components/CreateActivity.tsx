import GForm from "components/GForm/GForm";
import { Scroll } from "components/GForm/components/containers/Scroll";
import { Modal } from "components/Modal";
import { INFINIT_PARTICIPANTS } from "constants/global";
import * as Yup from "yup";
import { Validations } from "constants/Validations";
import { rangedItems } from "utils/formHelper";
import { Star } from "assets/svg";
import { Icon } from "components/Icon";
import { t } from "i18n-js";

type ValuesType = {
  textInput: string;
  numberPicker: number;
  radioInput: string;
  switch: boolean;
  dateStart: Date;
  dateEnd: Date;
  dropPicker: string | undefined;
};

const testVals = [
  { value: "box", label: "sports.Boxe" },
  { value: "bowling", label: "sports.Bowling" },
  { value: "bouldering", label: "sports.Bouldering" },
  { value: "soccer", label: "sports.Soccer" },
  { value: "soccer", label: "sports.Soccer" },
];

const testDropVals = [
  { icon: () => <Icon icon={Star} />, value: "1box", label: t("sports.Boxe") },
  { icon: () => <Icon icon={Star} />, value: "2bowling", label: t("sports.Bowling") },
  { icon: () => <Icon icon={Star} />, value: "3bouldering", label: t("sports.Bouldering") },
  { icon: () => <Icon icon={Star} />, value: "4soccer", label: t("sports.Soccer") },
  { icon: () => <Icon icon={Star} />, value: "5box", label: t("sports.Boxe") },
  { icon: () => <Icon icon={Star} />, value: "6bowling", label: t("sports.Bowling") },
  { icon: () => <Icon icon={Star} />, value: "7bouldering", label: t("sports.Bouldering") },
  { icon: () => <Icon icon={Star} />, value: "8soccer", label: t("sports.Soccer") },
  { icon: () => <Icon icon={Star} />, value: "9box", label: t("sports.Boxe") },
  { icon: () => <Icon icon={Star} />, value: "10bowling", label: t("sports.Bowling") },
  { icon: () => <Icon icon={Star} />, value: "11bouldering", label: t("sports.Bouldering") },
  { icon: () => <Icon icon={Star} />, value: "11soccer", label: t("sports.Soccer") },
  { icon: () => <Icon icon={Star} />, value: "12box", label: t("sports.Boxe") },
  { icon: () => <Icon icon={Star} />, value: "13bowling", label: t("sports.Bowling") },
  { icon: () => <Icon icon={Star} />, value: "14bouldering", label: t("sports.Bouldering") },
  { icon: () => <Icon icon={Star} />, value: "15soccer", label: t("sports.Soccer") },
];

// const testDropVals = [
//   { icon: () => <Icon icon={Star} />, value: "1box", label: t("sports.Boxe"), parent: "pa1" },
//   { icon: () => <Icon icon={Star} />, value: "2bowling", label: t("sports.Bowling"), parent: "pa1" },
//   { icon: () => <Icon icon={Star} />, value: "3bouldering", label: t("sports.Bouldering"), parent: "pa2" },
//   { icon: () => <Icon icon={Star} />, value: "4soccer", label: t("sports.Soccer"), parent: "pa2" },
//   { icon: () => <Icon icon={Star} />, value: "5box", label: t("sports.Boxe"), parent: "pa2" },
//   { icon: () => <Icon icon={Star} />, value: "6bowling", label: t("sports.Bowling"), parent: "pa3" },
//   { icon: () => <Icon icon={Star} />, value: "7bouldering", label: t("sports.Bouldering"), parent: "pa3" },
//   { icon: () => <Icon icon={Star} />, value: "8soccer", label: t("sports.Soccer"), parent: "pa3" },
//   { icon: () => <Icon icon={Star} />, value: "9box", label: t("sports.Boxe"), parent: "pa1" },
//   { icon: () => <Icon icon={Star} />, value: "10bowling", label: t("sports.Bowling"), parent: "pa1" },
//   { icon: () => <Icon icon={Star} />, value: "11bouldering", label: t("sports.Bouldering"), parent: "pa1" },
//   { icon: () => <Icon icon={Star} />, value: "11soccer", label: t("sports.Soccer"), parent: "pa4" },
//   { icon: () => <Icon icon={Star} />, value: "12box", label: t("sports.Boxe"), parent: "pa4" },
//   { icon: () => <Icon icon={Star} />, value: "13bowling", label: t("sports.Bowling"), parent: "pa4" },
//   { icon: () => <Icon icon={Star} />, value: "14bouldering", label: t("sports.Bouldering"), parent: "pa1" },
//   { icon: () => <Icon icon={Star} />, value: "15soccer", label: t("sports.Soccer"), parent: "pa1" },
// ];
const nowMoreOneHour = () => {
  const now = new Date();
  now.setHours(now.getHours() + 1);
  return now;
};

const initialValues: ValuesType = {
  textInput: "",
  numberPicker: INFINIT_PARTICIPANTS,
  radioInput: "kikou",
  switch: true,
  dateStart: new Date(),
  dateEnd: nowMoreOneHour(),
  dropPicker: undefined,
};

const validations = Yup.object().shape({
  // name: Validations.emailRequired,
  textInput: Validations.name,
  numberPicker: Validations.number,
});

type CreateActivityProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateActivity(props: CreateActivityProps) {
  const { open, setOpen } = props;
  return (
    <Modal visible={open} setVisible={setOpen}>
      <GForm
        initialValues={initialValues}
        validationSchema={validations}
        onSubmit={(values: ValuesType) => {
          console.log(values);
        }}
      >
        <Scroll>
          <GForm.TextInput text="TextInputFIeld" valName="textInput" placeholder="Ecris qqch" />
          <GForm.DropPicker text="DropPicker" valName="dropPicker" items={testDropVals} />
          <GForm.DateTimePicker text="DateTimePicker" valNames={{ start: "dateStart", end: "dateEnd" }} />
          <GForm.NumberPicker
            items={rangedItems(0, 10, 0, 1, true)}
            text="numberPicker"
            valName="numberPicker"
          />
          <GForm.Radio items={testVals} text="Radio Field" valName="kikou" />
          <GForm.Switch text="Switch" valName="switch" />
          <GForm.SubmitButton text="SubmitButton" />
        </Scroll>
      </GForm>
    </Modal>
  );
}
