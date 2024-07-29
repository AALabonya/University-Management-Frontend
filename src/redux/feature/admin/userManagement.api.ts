import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.internalActions({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: (args) => {
        console.log(args);
        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});
