import { HeartOutlined, MenuOutlined } from "@ant-design/icons";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { Badge, Button, Space, Typography } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import styles from "./StoreHeader.module.scss";

const StoreHeader = ({
  openDrawerMenuHandler,
  favoriteListCount,
  basketListCount,
  // setPaginationVisible
}: any) => {

  return (
    <header className={styles.header}>
      <Space align="center" className={styles.topContainer}>
        <Link to="/" >
          {/* onClick={setPaginationVisible} */}
          <Typography.Title className={styles.logo} level={2}>
            e-commerce
          </Typography.Title>
        </Link>
        <Button type="primary" onClick={openDrawerMenuHandler}>
          <MenuOutlined /> Каталог
        </Button>
      </Space>
      <Space>
        <Link to="/favorite">
          <Badge count={favoriteListCount}>
            <Button
              ghost
              icon={<HeartOutlined style={{ color: "#1677ff" }} />}
              size="large"
            />
          </Badge>
        </Link>
        <Link to="/basket">
          <Badge count={basketListCount}>
            <Button
              ghost
              icon={<ShoppingCartOutlined style={{ color: "#1677ff" }} />}
              size="large"
            />
          </Badge>
        </Link>
      </Space>
    </header>
  );
};

export default StoreHeader;
