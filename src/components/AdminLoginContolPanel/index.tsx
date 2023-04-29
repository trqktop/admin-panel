import { Space, Button } from "antd";

type PropsTypes = {
  adminControlPanelHandler: () => void;
  buttonValue: string;
};

const AdminLoginControlPanel: React.FC<PropsTypes> = ({
  adminControlPanelHandler,
  buttonValue,
}) => {
  return (
    <Space
      align="center"
      className="admin-panel"
      style={{
        background: "#f3f3f3",
        minWidth: "100%",
        paddingRight: "100px",
      }}
    >
      <Button style={{ maxHeight: "30px" }} onClick={adminControlPanelHandler}>
        {buttonValue}
      </Button>
    </Space>
  );
};

export default AdminLoginControlPanel;
