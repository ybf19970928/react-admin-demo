import {FC} from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd'
import { useHistory } from 'react-router-dom'
import { userLogin } from '../../apis/login'
const Login: FC = () => {
    const history = useHistory()
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };
        const onFinish = (values: any) => {
          userLogin({...values}).then(res => {
            if (res.data.code === 1){
              localStorage.setItem('reactToken', res.data.token)
              // history.push('/')
              history.replace('/')
            }
          })
        };
        const onFinishFailed = (errorInfo: any) => {
          console.log('Failed:', errorInfo);
        };
      
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Card title="用户登陆" style={{ width: 600}}>
            <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="name"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
      
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登陆
              </Button>
            </Form.Item>
          </Form>
        </Card>
        </div>
        )
      }
export default Login