import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import useService from "../../hooks/useService";

const LoginFormContainer: React.FunctionComponent = () => {
  const [state, login]: any = useService();
  const {
    loading,
    error,
    response,
    success,
    validateStatus,
    helpMessage,
  }: any = {
    ...state,
  };
  const onFinish = (values: any) => {
    login(values);
  };

  return (
    <>
      <LoginForm
        onFinish={onFinish}
        loading={loading}
        validateStatus={validateStatus}
        helpMessage={helpMessage}
      />
      {success && <Navigate to="/admin" replace={true} />}
    </>
  );
};

export default LoginFormContainer;
