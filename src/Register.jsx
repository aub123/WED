import { Modal, Button, Form, Input, Row, Col } from 'antd'
import React from "react";
import { useNavigate } from 'react-router-dom';
import register from '../api/register'
import login from '../api/login'
import getVerifycode from '../api/getVerifycode'
// import { useState } from 'react';
import { useReducer } from 'react';

const Register = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const reducer = (state, action) => {
        switch (action.type) {
            case 'verify':
                return {
                    ...state,
                    verify: action.show
                }
            case 'register':
                return {
                    ...state,
                    register: action.show
                }
        }
    }
    const initialstate = { verify: false, register: false }
    const [state, dispatch] = useReducer(reducer, initialstate)
    // const [isVerifyModalVisible, setIsModalVisible] = useState(false);
    // const [isRegisterVisible, setIsRegisterVisible] = useState(false)
    // const showModal = (f) => {
    //     f(true);
    // };

    // const handleOk = (f) => {
    //     f(false);
    // };

    // const handleCancel = (f) => {
    //     f(false);
    // };


    return (
        <>
            <Form
                className='form'
                form={form}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 8
                }}
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
                    label='Phone'
                    // labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    extra={'输入手机号码以获取验证码'}
                >
                    <Row gutter={16}>
                        <Col span={8} labelCol={{ span: 8 }}>
                            <Form.Item
                                name="phoneNumber"
                                rules={[
                                    {
                                        required: true,
                                        len: 11,
                                        message: '手机号格式错误'
                                    }
                                ]}
                            >
                                <Input placeholder="请输入手机号码" />
                            </Form.Item>
                        </Col>
                        <Col>
                            <Form.Item
                                // wrapperCol={{ offset: 8, span: 8 }}
                                style={{ textAlign: "center" }}>

                                <Button
                                    type={"primary"}
                                    onClick={
                                        async () => {
                                            const data = form.getFieldValue('phoneNumber')
                                            console.log(data)
                                            if (data) {
                                                console.log(state)
                                                if (data.trim().length == 11) {
                                                    await getVerifycode(data).catch(err => {
                                                        // showModal(setIsModalVisible)
                                                        dispatch({ type: 'verify', show: true })
                                                    })
                                                } else {
                                                    dispatch({ type: 'register', show: true })
                                                }
                                            }
                                            else {
                                                console.log('test failed')
                                            }

                                        }
                                    }>获取验证码</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form.Item>



                <Form.Item
                    wrapperCol={{
                        span: 4,
                    }}
                    label="Verifycode"
                    name="verifycode"
                    rules={[
                        {
                            required: true,
                            len: 4,
                            message: "验证码格式错误"
                        }
                    ]}
                >
                    <Input placeholder="请输入验证码" />

                </Form.Item>

                <Form.Item
                    wrapperCol={{ offset: 8, span: 8 }}
                    style={{ textAlign: "center" }}
                >
                    <Button onClick={async () => {
                        const data = form.getFieldsValue()
                        console.log(data)
                        if (data.phoneNumber && data.password && data.username && data.verifycode) {
                            register(data).then(res => {
                                console.log(res)
                                if (res.status == 201) {
                                    login({ username: data.username, password: data.password })

                                    setTimeout(() => {
                                        navigate('/')

                                    }, 2000);
                                }
                            }).catch(err => {
                                // showModal(setIsRegisterVisible)
                                dispatch({ type: "register", show: true })
                            })
                        }
                        else dispatch({ type: "register", show: true })
                        // else showModal(setIsRegisterVisible)
                    }}>Register</Button>
                </Form.Item>
                <Form.Item
                    wrapperCol={{ offset: 8, span: 16 }}
                >
                    <br />
                    如果已经注册过账号，去登录：
                    <Button type='primary' onClick={() => {
                        navigate('/login')
                    }}>To :Login</Button>
                </Form.Item>
            </Form>
            <Modal
                // visible={isVerifyModalVisible}
                visible={state.verify}
                // onOk={() => { handleOk(setIsModalVisible) }}
                onOk={() => { dispatch({ type: 'verify', show: false }) }}
                // onCancel={() => { handleCancel(setIsModalVisible) }}
                onCancel={() => { dispatch({ type: 'verify', show: false }) }}
            >
                短期尝试次数过多，一分钟后再试
            </Modal>
            <Modal
                // visible={isRegisterVisible}
                visible={state.register}
                // onOk={() => { handleOk(setIsRegisterVisible) }}
                // onCancel={() => { handleCancel(setIsRegisterVisible) }}
                onOk={() => { dispatch({ type: 'register', show: false }) }}
                onCancel={() => { dispatch({ type: 'register', show: false }) }}
            >
                填写信息有误,请检查数据是否完善
            </Modal>
        </>
    )
}


export default Register