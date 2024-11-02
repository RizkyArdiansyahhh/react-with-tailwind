import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="FullName"
        type="text"
        name="fullName"
        placeholder="Input Your FullName"
      ></InputForm>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="********"
      ></InputForm>
      <InputForm
        label="Confirm Password"
        type="password"
        name="password"
        placeholder="********"
      ></InputForm>
      <Button classname="bg-sky-500 w-full">Login</Button>
    </form>
  );
};
export default FormRegister;
