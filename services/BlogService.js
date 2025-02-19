import Http from "@/http/http";

export const GetAllCategories = () => {
  return Http.get(`/category`);
};

export const GetCategory = (ID) => {
  return Http.get(`/category/${ID}`);
};

export const CreateCategory = (categoryData) => {
  return Http.post(`/category/`, categoryData);
};

export const UpdateCategory = (ID, categoryData) => {
  return Http.post(`/category/update/${ID}`, categoryData);
};

export const DeleteCategory = (ID) => {
  return Http.post(`/category/delete/${ID}`);
};

export const GetCategoryPosts = (ID) => {
  return Http.get(`/category/${ID}/posts`);
};
