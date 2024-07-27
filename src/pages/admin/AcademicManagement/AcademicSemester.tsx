import { Button, Table } from "antd";
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
  const { data: semesterData } = useGetAllSemestersQuery([
    {
      name: "year",
      value: "2024",
    },
  ]);
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
      key: "name",
      dataIndex: "name",
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summer",
          value: "Summer",
        },
      ],
    },
    {
      title: "Year",
      key: "year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2026",
          value: "2026",
        },
      ],
    },
    {
      title: "Start Month",
      key: "startMonth",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      key: "endMonth",
      dataIndex: "endMonth",
    },
    {
      title: "Action",
      key: "x",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
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
