import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~/firebase';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const navitage = useNavigate();

    const hanldeSubmitLogin = () => {
        signInWithEmailAndPassword(auth, emailInput, passwordInput)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navitage('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login-from')}>
                <h1 className={cx('title')}>ĐĂNG NHẬP</h1>
                <input
                    type="text"
                    placeholder="Email"
                    className={cx('login')}
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className={cx('login')}
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                />
                <button
                    className={cx('submit-btn')}
                    onClick={hanldeSubmitLogin}
                >
                    Đăng nhập
                </button>
            </div>
            <div className={cx('login-from-bottom')}>
                <Link to="/register" className={cx('register')}>
                    Đăng ký?
                </Link>
                <Link to="/forgot-password" className={cx('forgot-password')}>
                    Quên mật khẩu?
                </Link>
            </div>
        </div>
    );
}

export default Login;
