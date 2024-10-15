import alovaInstance from "@/lib/service/request";
import { SignInSchema, SignUpSchema } from "@/lib/schemas/user";

export const signIn = (data: SignInSchema) =>
  alovaInstance.Post("/user/login", data);

export const signUp = (data: SignUpSchema) => alovaInstance.Post("/user", data);

export const getRegisterCaptcha = (email: string) =>
  alovaInstance.Get("/user/register-captcha", {
    params: {
      address: email,
    },
  });
