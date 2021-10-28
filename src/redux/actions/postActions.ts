export const CREATE_POST = 'CREATE_POST';

export const createPost = (data: any) => {
  return {
    type: CREATE_POST,
    payload: data,
  };
};
