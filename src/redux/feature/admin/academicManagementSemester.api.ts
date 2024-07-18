import { baseApi } from "../../api/baseApi";

const academicManagementSemester = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: () => ({
        url: "/academic-semesters",
        method: "GET",
      }),
    }),
    academicSemester: builder.mutation({
      query: () => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
      }),
    }),
  }),
});
export const { useGetAllSemesterQuery } = academicManagementSemester;
