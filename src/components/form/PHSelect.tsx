import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  name: string;
  label: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

export default function PHSelect({ name, label, options }: TPHSelectProps) {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            {...field}
            options={options}
            size="large"
          />
        </Form.Item>
      )}
    />
  );
}
