import React from 'react';

import { Link } from 'react-router-dom';

import './style1.css';

function Login() {
    return (
        <React.Fragment>
            <Link className="logo" to="">
            <img src="C&Clogo.png" alt="C&C 로고" id="logo" />
            </Link>
            <div className="L-box">
                <span className="L-borderLine"></span>
                <form action="Login" method="post">
                    <h2>Login</h2>
                    <div className="L-inputBox">
                        <input type="text" required="required" />
                        <span>아이디</span>
                        <i></i>
                    </div>
                    <div className="L-inputBox">
                        <input type="password" required="required" />
                        <span>비밀번호</span>
                        <i></i>
                    </div>
                    <div className="L-links">
                        <a href="#">아이디/비밀번호 찾기</a>
                        <Link to="Registration">회원가입</Link>
                    </div>
                    <input type="submit" value="로그인" />
                </form>
            </div>
            <div id="no-mobile">
                <span>화면이 너무 큽니다.</span>
            </div>
        </React.Fragment>
    );
}

export default Login;