import { FormItemProps, FormProps } from "antd";

// 组件属性
export type AppFormProps = {
  form: FormInstance;
  formConfig: FormItemConfig[];
  formData?: Record<string, unknown>
  formProps?: FormProps;
  submit?: ((values: any) => void);
}

// 表单配置[待补充...]
export interface FormItemConfig extends FormItemProps  {
  field: string; 
  label: string; 
  // react lint 报错，要求小写 TODO fix...
  formcomponent: JSX.Element;
  value?: unknown;
  required?: boolean;
}