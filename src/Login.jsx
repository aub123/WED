import { Button, Form, Input, Modal } from 'antd'
import React from "react";
import { useNavigate } from 'react-router-dom';
// import login from '../api/login'
const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const hideModal = () => {
        setIsModalVisible(false)
    }
    return (
        <>
            <Form
                className='form'
                form={form}
                // labelCol={{
                //     span: 8,
                // }}
                // wrapperCol={{
                //     span: 16,
                // }}
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    label='Username'
                    name="username"
                    rules={
                        [
                            {
                                required: true,
                                message: '用户名不能为空'
                            }
                        ]
                    }
                >
                    <Input placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={
                        [
                            {
                                required: true,
                                message: '密码不能为空',
                                min: 4
                            },
                        ]

                    }>
                    <Input.Password placeholder="请输入密码" />
                </Form.Item>
                <Form.Item
                    // wrapperCol={{ offset: 8, span: 8 }}
                    >
                    <Button type={"primary"} 
                    className='button'
                    onClick={
                        async () => {
                            const data = form.getFieldsValue()
                            console.log(data)
                            if (data.username && data.password && data.username.trim() && data.password.trim()) {
                                // const res = await login(data)
                                showModal();
                                setTimeout(() => {
                                    Promise.resolve();
                                    hideModal();
                                }, 3000);
                                // console.log(res)
                                // if (res.status == 200) {
                                //     await showModal()
                                //     setTimeout(() => {
                                //         navigate('/list')
                                //     }, 2000);

                                // }
                            }
                            else {
                                console.log('failed')
                            }
                        }
                    }
                    >
                        Login
                    </Button>
                </Form.Item>
                {/* <Form.Item
                    wrapperCol={{ offset: 8, span: 8 }}>
                    如果没有账户,请注册再登录<br />
                    <Button onClick={() => navigate('/register')}>
                        To Register
                    </Button>
                </Form.Item> */}

            </Form>
            <Modal visible={isModalVisible}>
                登录成功等待跳转......
            </Modal>
        </>
    )
}

export default Login