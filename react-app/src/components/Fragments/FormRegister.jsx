import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
const FormRegister = () => {
  function handleRegister(e) {
    e.preventDefault();
    window.location.href = "/login";
  }
  return (
    <form onSubmit={handleRegister}>
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
      <Button type="submit" classname="bg-sky-500 w-full">
        Register
      </Button>
    </form>
  );
};
export default FormRegister;
