import { useGetAllSemesterQuery } from "../../../redux/feature/academicSemester/academicSemesterApi";

export default function AcademicSemester() {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log(data);

  return <div>AcademicSemester</div>;
}
