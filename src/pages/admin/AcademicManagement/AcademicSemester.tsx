import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllSemesterQuery } from "../../../redux/feature/admin/academicManagementSemester.api";

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

export default function AcademicSemester() {
  const { data: semesterData } = useGetAllSemesterQuery(undefined);
  console.log(semesterData);

  const tableData = semesterData?.data?.map((item) => ({
    _id: item._id,
    name: item.name,
    code: item.code,
    year: item.year,
    startMonth: item.startMonth,
    endMonth: item.endMonth,
  }));
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Code",
      dataIndex: "code",
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "startMonth",
      dataIndex: "startMonth",
    },
    {
      title: "endMonth",
      dataIndex: "endMonth",
    },
  ];

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <Table
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
}
