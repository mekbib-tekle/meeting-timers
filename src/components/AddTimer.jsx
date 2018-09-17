import React from 'react';
import {
  Form, Icon, Input, Button,
} from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class AddTimerForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    const { form } = this.props;
    const { validateFields } = form;
    validateFields();
  }

  handleSubmit = (e) => {
    const { form, onSubmit } = this.props;
    const { validateFields } = form;
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        onSubmit({
          name: values.userName,
          time: 0,
          isRunning: false,
        });
        this.props.form.setFields({
          userName: {
            value: '',
          },
        });
      }
    });
  }


  render() {
    const { form } = this.props;
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = form;

    const formRules = {
      username: {
        rules: [{ required: true, message: 'Please input your username!' }],
      },
    };
    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    return (
        <div className="add-timer">
            <div className="form-bg" />
            <Form onSubmit={this.handleSubmit} className="add-timer-form">
                <div className="form-header">
                    <h1>Meeting Timers</h1>
                    <h2>Track how much time each meeting participant takes</h2>
                </div>
                <div className="form-items-wrapper">
                    <FormItem validateStatus={userNameError ? 'error' : ''} help={userNameError || ''}>
                        {getFieldDecorator('userName', formRules.username)(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="name" />
                        )}
                    </FormItem>

                    <FormItem>
                        <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                    Add Member
                        </Button>
                    </FormItem>

                </div>
            </Form>
        </div>
    );
  }
}

const AddTimer = Form.create()(AddTimerForm);

export default AddTimer;
