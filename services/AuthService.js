import Http from "@/http/http";

export const RegisterUser = (userData) => {
  return Http.post(`/auth/register`, userData);
};

export const LoginUser = (userData) => {
  return Http.post(`/auth/login`, userData);
};

export const GetMe = () => {
  return Http.get(`/auth/me`);
};

export const LogoutUser = () => {
  return Http.get(`/auth/logout`);
};
