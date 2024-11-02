import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" text="Don't have an account ?" link="/register">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
