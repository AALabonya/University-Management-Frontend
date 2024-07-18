import { useGetAllSemesterQuery } from "../../../redux/feature/admin/academicManagementSemester.api";

export default function AcademicSemester() {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);

  return <div>AcademicSemester</div>;
}
