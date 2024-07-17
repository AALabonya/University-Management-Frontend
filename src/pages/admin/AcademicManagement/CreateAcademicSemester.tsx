import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

export default function CreateAcademicSemester() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const nameOptions = [
    {
      value: " Autumn",
      label: "Autumn",
    },
    {
      value: "Summer",
      label: "Summer",
    },
    {
      value: "Fall",
      label: "Fall",
    },
  ];
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect label="Name" name="name" options={nameOptions} />
          <PHSelect label="Year" name="name" options={nameOptions} />
          <PHSelect
            label="Start Month"
            name="startMonth"
            options={nameOptions}
          />
          <PHSelect label="End Month" name="endMonth" options={nameOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
}
