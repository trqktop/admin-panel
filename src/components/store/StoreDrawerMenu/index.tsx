import { Drawer } from "antd";
import StoreMenu from "../StoreMenu";
import { DataType } from "../../../containers/store/StorePageContainer";

type Props = {
  isOpen: boolean,
  onClose: () => void
  categories: DataType
}

const DrawerMenu: React.FC<Props> = ({ isOpen, onClose, categories , onChange }: any) => {
  return (
    <Drawer
      placement={"left"}
      width={"fit-content"}
      onClose={onClose}
      open={isOpen}
    >
      <StoreMenu categories={categories} />
    </Drawer>
  );
};
export default DrawerMenu;
