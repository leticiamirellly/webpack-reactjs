import { connectionAPIGet } from "../api/connection";

export const useRequest = () => {

  const getRequest = async <T>(url: string): Promise<T | undefined> => {
    const result = await connectionAPIGet<T>(`${process.env.REACT_APP_API_URL}${url}`)
      .then((res) => {
        return res;
      })
      .catch((error: Error) => {
        throw new Error('Something went wrong');
      });
      return result
  };

  return {
    getRequest,
  };
};
