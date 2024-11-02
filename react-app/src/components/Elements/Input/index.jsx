/* eslint-disable react/prop-types */
import Label from "./Label";
import Input from "./Input";
const InputForm = (props) => {
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlfor={name}>{label}</Label>
      <Input id={name} type={type} placeholder={placeholder} name={name} />
    </div>
  );
};

export default InputForm;
