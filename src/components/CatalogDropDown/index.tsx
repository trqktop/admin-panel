import Dropdown from "antd/lib/dropdown/dropdown";
import { Space } from "antd";
import { DBCategoryType } from "../../types";
import { MenuProps } from "rc-menu";
import { useCallback } from "react";
import { theme } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { StoreCategoriesType } from "../../types";
import { MenuInfo } from "rc-menu/lib/interface";
type PropsTypes = {
  categories: StoreCategoriesType;
  onClick: (e: MenuInfo) => void;
};

const CatalogDropDown = ({ categories, onClick }: PropsTypes) => {
  const { token } = theme.useToken();
  const formater = useCallback(
    (categories: Array<DBCategoryType>): MenuProps["items"] => {
      return categories.map(({ id, name, children }: DBCategoryType) => {
        const formattedChildren = children.length ? formater(children) : null;
        return { key: id, label: name, children: formattedChildren };
      });
    },
    []
  );

  if (categories.data?.length) {
    const items: MenuProps["items"] = formater(categories.data!);
    return (
      <Dropdown menu={{ items, onClick }}>
        <Space style={{ color: token.colorLink }}>
          Каталог товаров
          <DownOutlined />
        </Space>
      </Dropdown>
    );
  }

  return null;
};

export default CatalogDropDown;
