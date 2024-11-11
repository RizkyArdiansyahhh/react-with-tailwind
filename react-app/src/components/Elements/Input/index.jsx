/* eslint-disable react/prop-types */
import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";
const InputForm = forwardRef((props, ref) => {
  const { label, type, name, placeholder } = props;
  return (
    <div className="mb-6">
      <Label htmlfor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        ref={ref}
      />
    </div>
  );
});
InputForm.displayName = "InputForm";

export default InputForm;
