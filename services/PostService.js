import Http from "@/http/http";

export const GetAllPosts = () => {
  return Http.get(`/post`);
};

export const GetPost = (ID) => {
  return Http.get(`/post/${ID}`);
};

export const CreatePost = (postData) => {
  return Http.post(`/post/create`, postData);
};

export const UpdatePost = (ID, postData) => {
  return Http.post(`/post/update/${ID}`, postData);
};

export const DeletePost = (ID) => {
  return Http.post(`/post/delete/${ID}`);
};