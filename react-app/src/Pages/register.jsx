import AuthLayout from "../components/Layouts/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";
const RegisterPage = () => {
  return (
    <AuthLayout title="Register" text="Alreadyhave an account ?" link="/login">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
