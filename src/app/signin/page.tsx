import GoogleButton from "../components/GoogleButton/GoogleButton";
import SignInForm from "../components/SignInForm/SignInForm";
import styles from './signin.module.css';

export default function SignIn() {
    return (
        <div className={styles.root}>
            <h1>Sign In</h1>   
            <div className={styles.container}>
                <GoogleButton />
                <h4>or</h4>
                <SignInForm />
            </div>          
        </div>
    )
}