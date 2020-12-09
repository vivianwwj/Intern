import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Form, Input, Button } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styles from './Login.module.css';
// import LoginBox from './Login01'



class Login extends Component {
    formRef = React.createRef();
    constructor(props) {
        super(props);
        this.onCickLogin = this.onCickLogin.bind(this)
        
        this.state = {
            username: '',
            password: '',
            visible: 'false',
        }
    }

    onCickLogin = () => {
        console.log('test');
    };

   

    render() {
        return (
            <div className={styles.loginBox}>
                用户登录
                <Form ref={this.formRef} name="loginBox" onFinish={this.onFinish}>
                    <li className={styles.inputBox}>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true, message: 'Please input your username!' 
                                },
                            ]}
                        >
                            <Input
                                placeholder="请输入用户名"
                                prefix={<UserOutlined />}
                            />
                        </Form.Item>
                    </li>
                    <li className={styles.inputBox}>
                        <Form.Item
                            name="password"  
                            rules={[
                                {
                                    required: true,message: 'Please input your password!' 
                                },
                            ]}
                        >
                            <Input.Password
                                placeholder="请输入密码"
                                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>
                    </li>
                    <div className={styles.inputBox}>
                        <Button onClick={this.onCickLogin} type="primary">登录</Button>
                    </div>
                    {/* <LoginBox/> */}
                </Form>
            </div>
        );
    }
}

export default Login;