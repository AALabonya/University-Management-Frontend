import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const dispatch = useAppDispatch();

  const [login, { data, error }] = useLoginMutation();

  console.log("data=>", data);
  console.log("error=>", error);

  const onSubmit = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };

    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);

    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID: </label>
          <input type="text" id="id" {...register("userId")} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  );
}
