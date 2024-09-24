import { z } from "zod";

export const signInSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "用户名长度不能小于2",
    })
    .max(50, {
      message: "用户名长度不能大于50",
    }),
  password: z
    .string()
    .min(6, {
      message: "密码长度不能小于6",
    })
    .max(20, {
      message: "密码长度不能大于20",
    }),
});
