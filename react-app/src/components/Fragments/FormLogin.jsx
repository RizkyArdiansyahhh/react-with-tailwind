import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
const FormLogin = () => {
  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products";
  }
  return (
    <form onSubmit={handleLogin}>
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
      <Button classname="bg-sky-500 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
