import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: "用户名长度不能小于2",
      })
      .max(50, {
        message: "用户名长度不能大于50",
      }),
    nickname: z.string().min(2, {
      message: "昵称长度不能小于2",
    }),
    password: z
      .string()
      .min(6, {
        message: "密码长度不能小于6",
      })
      .max(20, {
        message: "密码长度不能大于20",
      }),
    confirmPassword: z.string().min(6, {
      message: "密码长度不能小于6",
    }),
    email: z.string().email({
      message: "邮箱格式不正确",
    }),
    captcha: z.string().min(6, {
      message: "验证码长度不能小于6",
    }),
  })
  .refine(
    (data) => {
      console.log("=>(schema.ts:42) data", data);
      return data.password !== data.confirmPassword;
    },
    {
      message: "两次密码输入不一致",
      path: ["confirmPassword"],
    },
  );
