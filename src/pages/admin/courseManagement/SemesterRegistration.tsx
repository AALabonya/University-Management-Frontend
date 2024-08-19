import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { zodResolver } from "@hookform/resolvers/zod";

import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { monthOptions } from "../../../constants/global";

import { toast } from "sonner";
import { TResponse } from "../../../types/global";
import {
  semesterOptions,
  semesterStatusOptions,
} from "../../../constants/semester";
import { useGetAllSemestersQuery } from "../../../redux/feature/admin/academicManagementSemester.api";

export default function SemesterRegistration() {
  const { data: academicSemester } = useGetAllSemestersQuery([
    { name: "sort", value: "year" },
  ]);
  console.log(academicSemester);

  const academicSemesterOptions = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating.....");
    const name = semesterOptions[Number(data?.name) - 1]?.label;
    console.log(name);

    const semesterData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };
    // try {
    //   const res = (await addAcademicSemester(semesterData)) as TResponse<any>;
    //   console.log(res);
    //   if (res.error) {
    //     toast.error(res.error.data.message, { id: toastId });
    //   } else {
    //     toast.success("Semester created", { id: toastId });
    //   }
    // } catch (err) {
    //   toast.error("Something went wrong", { id: toastId });
    // }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            label="Academic Semester"
            name="academicSemester"
            options={academicSemesterOptions}
          />
          <PHSelect
            name="status"
            label="Status"
            options={semesterStatusOptions}
          />
          <PHSelect label="Start Month" name="startMonth" options={se} />
          <PHSelect label="End Month" name="endMonth" options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
}
