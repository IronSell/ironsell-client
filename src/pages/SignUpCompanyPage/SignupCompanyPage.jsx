import SignUpCompanyForm from '../../components/SignUpCompanyForm/SignUpCompanyForm'
import './SignupCompany.styles.css';

const SignupCompanyPage = () => {
  return (
    <>
      <header className='SignupCompanyPage'>
        <h1>Welcome! Create your company account</h1>
        <p> You will then be able to post your first job offer</p>
      </header>
      <main>
        <SignUpCompanyForm />
      </main>
    </>
  );
};

export default SignupCompanyPage;
