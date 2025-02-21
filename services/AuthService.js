import Http from "@/http/http";

export const RegisterUser = (userData) => {
  return Http.post(`/auth/register`, userData);
};

export const LoginUser = (userData) => {
  return Http.post(`/auth/login`, userData);
};

export const GetMe = (cookie = null) => {
  if (!cookie)
    return Http.get(`/auth/me`);

  return Http.get('/auth/me',{
    headers : {
      Cookie : `auth_token=${cookie};`
    }
  })
};

export const LogoutUser = () => {
  return Http.get(`/auth/logout`);
};
