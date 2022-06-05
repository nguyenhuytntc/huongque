import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import styles from './Register.module.scss';
import { auth } from '~/firebase';

const cx = classNames.bind(styles);

function Register() {
    const [value, setValueInput] = useState({
        email: '',
        password: '',
        fullname: '',
        address: '',
        phone: '',
    });

    const navitage = useNavigate();

    const email = value.email;
    const password = value.password;
    const handleInputChange = (e) => {
        setValueInput({ ...value, [e.target.name]: e.target.value });
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navitage('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    };
    return (
        <div className={cx('wrapper')}>
            <form onSubmit={handleSubmitRegister}>
                <input
                    name="email"
                    value={value.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                <input
                    name="password"
                    value={value.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                />
                <input
                    name="fullname"
                    value={value.fullname}
                    onChange={handleInputChange}
                    placeholder="Fullname"
                />
                <input
                    name="address"
                    value={value.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                />
                <input
                    name="phone"
                    value={value.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                />
                <button type="submit">Register</button>
            </form>
            <p>
                Allready account?{' '}
                <Link to="/login">
                    <strong>Login</strong>
                </Link>
            </p>
        </div>
    );
}

export default Register;
