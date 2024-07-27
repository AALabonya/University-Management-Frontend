import { Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/feature/admin/academicManagementSemester.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";

// interface DataType {
//   key: React.Key;
//   name: string;
//   age: number;
//   address: string;
// }
export type TTableData = Pick<
  TAcademicSemester,
  "name" | "year" | "startMonth" | "endMonth"
>;
export default function AcademicSemester() {
  const { data: semesterData } = useGetAllSemestersQuery(undefined);
  console.log(semesterData);

  const tableData = semesterData?.data?.map((item) => ({
    _id: item._id,
    name: item.name,
    code: item.code,
    year: item.year,
    startMonth: item.startMonth,
    endMonth: item.endMonth,
  }));
  const columns: TableColumnsType<TTableData> = [
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

  const onChange: TableProps<TTableData>["onChange"] = (
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
