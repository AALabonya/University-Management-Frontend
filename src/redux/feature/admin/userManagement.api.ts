import { baseApi } from "../../api/baseApi";

const userManagementApi = baseApi.internalActions({
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});
