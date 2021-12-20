import SignUpCompanyForm from '../../components/SignUpCompanyForm/SignUpCompanyForm'

const SignupCompanyPage = () => {
  return (
    <>
      <header>
        <h1>Welcome! Create your company account</h1>
        <p>You will then be able to post your first job offer</p>
      </header>
      <main>
        <SignUpCompanyForm />
      </main>
    </>
  );
};

export default SignupCompanyPage;
