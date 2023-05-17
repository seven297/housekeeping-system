import { Form } from "antd";
import { useId } from "react";
import { AppFormProps } from "./Form";

export default function AppForm({
  form,
  formConfig,
  formData = {},
  formProps = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    layout: 'horizontal'
  },
  submit
}: AppFormProps) {
  const id = useId()

  return (
    <Form
      name={`app-form-${id}`}
      form={form}
      initialValues={formData}
      onFinish={submit}
      {...formProps}
    >
      {formConfig.map(formItem => (
        <Form.Item
          key={formItem.field}
          name={formItem.field}
          rules={formItem.rules}
          {...formItem}
        >
          {formItem.formcomponent}
        </Form.Item>
      ))}
    </Form>
  )
}