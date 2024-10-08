import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};
export default function PHInput({ type, name, label }: TInputProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item>
            <Input {...field} type={type} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
}
