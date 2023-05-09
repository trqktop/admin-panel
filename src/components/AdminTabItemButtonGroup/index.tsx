import { Button } from "antd";

const AdminTabItemButtonGroup = ({
  render,
  record,
  tabContext,
  onDelete,
  openUpdateModal,
}: any) => {
  let isDisable = false;
  if (render.children) {
    isDisable = render.children.length;
  }
  return (
    <Button.Group size="middle">
      <Button size="small" onClick={() => openUpdateModal(tabContext, render)}>
        Update
      </Button>
      <Button
        size="small"
        disabled={isDisable}
        onClick={() => onDelete(tabContext, record)}
      >
        Delete
      </Button>
    </Button.Group>
  );
};

export default AdminTabItemButtonGroup;
