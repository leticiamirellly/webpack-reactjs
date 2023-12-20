import axios from "axios";
import { MethodsEnum } from "../constants/methods.enum";
import {
  ERROR_CONNECTION,
  ERROR_UNAVAILABLE_SERVER
} from "../constants/errorsStatus";


export default class ConnectionAPI {
  static async call<T>(url: string, method: string, body?: Object): Promise<T>{
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;

      default:
        return (await axios.post<T>(url, body)).data;
    }
  }
  static async connect<T>(url: string, method: string, body?: Object): Promise<T> {
    return ConnectionAPI.call<T>(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 500:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_UNAVAILABLE_SERVER);
    });
  }
}

export const connectionAPIGet = async <T>(url: string): Promise<T> => {
  return await ConnectionAPI.connect<T>(`${url}`, MethodsEnum.GET);
};
