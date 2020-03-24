import React, { useState } from 'react';
import AppLayOut from '../components/AppLayOut';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Signup = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordChk, setPasswordChk] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      id,
      nick,
      password,
      passwordChk,
      term,
    });
    if (password !== passwordChk) {
      return setPasswordError(true)
    }
    if (!term){
      return setTermError(true)
    }

  };
  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangeNick = (e) => {
    setNick(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeTerm = (e) => {
    setTermError(false);
    setTerm(e.target.checked);
  };
  const onChangePasswordChk = (e) => {
    setPasswordError(e.target.value !== password);
    setPasswordChk(e.target.value);
  };


  return (

    <AppLayOut>
      <div>
        회원가입
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="이름"
            name="username"
            rules={[
              {
                required: true,
                message: '이름을 입력하세요',
              },
            ]}
          >
            <Input required value={id} onChange={onChangeId} />
          </Form.Item>

          <Form.Item
            label="닉네임"
            name="nickname"
            rules={[
              {
                required: true,
                message: '닉네임을 입력하세요',
              },
            ]}
          >
            <Input required value={nick} onChange={onChangeNick}/>
          </Form.Item>

          <Form.Item
            label="비밀번호"
            name="password"
            rules={[
              {
                required: true,
                message: '비밀번호를 입력하세요',
              },
            ]}
          >
            <Input.Password required value={password} onChange={onChangePassword} />
          </Form.Item>

          <Form.Item
            label="비밀번호 확인"
            name="passwordChk"
            // rules={[
            //   {
            //     required: true,
            //     message: '비밀번호를 다시 입력하세요',
            //   },
            // ]}
          >
            <Input.Password required value={passwordChk} onChange={onChangePasswordChk} />
            { passwordError && <div style={{ color: 'red' }}> 비밀번호가 일치하지 않습니다. </div> }
          </Form.Item>

          <Form.Item {...tailLayout} name="term" valuePropName="checked">
            <Checkbox value={term} onChange={onChangeTerm}>가입 정책에 모두 동의합니다.</Checkbox>
            { termError && <div style={{ color: 'red' }}> 약관에 동의하셔야 합니다. </div> }
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AppLayOut>
  )
}


export default Signup;
