import { useCallback, useMemo, useState, createContext } from "react";
import fakeService from "../services/fakeService";
import { Options } from "../services/fakeService";
const service = fakeService;

type responseState = {
  error: boolean;
  loading: boolean;
  validateStatus:
  | ""
  | "error"
  | "validating"
  | "success"
  | "warning"
  | undefined;
  helpMessage: string;
  response: any;
  success: boolean;
};

const initialState: responseState = {
  error: false,
  helpMessage: "",
  success: false,
  validateStatus: undefined,
  loading: false,
  response: null,
};

const getLoginConfig = (userData: any): Options => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };
};

const useService = () => {
  const [state, setState] = useState(initialState);
  const login = useCallback(async (userData: any) => {
    setState({
      ...initialState,
      loading: true,
      success: false,
      validateStatus: "validating",
    });
    try {
      const res: any = await service.fetch("example", getLoginConfig(userData));
      const parseRes = await JSON.parse(res);
      setState((state) => ({
        ...state,
        response: parseRes,
        error: false,
        loading: false,
        success: parseRes.success,
        validateStatus: "success",
      }));
      localStorage.setItem("user", res);
      localStorage.setItem('token', parseRes.data.user.token)
    } catch (error: any) {
      setState((state) => ({
        ...state,
        error: true,
        success: false,
        loading: false,
        helpMessage: "Неверный логин или пароль",
        validateStatus: "error",
      }));
      throw new Error(error);
    }
  }, []);

  return [state, login];
};
export default useService;
