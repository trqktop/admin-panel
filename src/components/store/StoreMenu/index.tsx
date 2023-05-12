import React, { useCallback, useContext, useMemo, useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { MenuDataItem } from "@ant-design/pro-components";
// import classNames from "classnames";
import { DataType } from "../../../containers/store/StorePageContainer";
type MenuItem = Required<MenuProps>["items"][number];

function transformCategoriesToMenuItems(categories: any): MenuItem[] {
  const transform = (category: any) => ({ ...category, label: category.name, key: category.id })
  return categories.map((category: any) => {
    if (category.children) {
      return ({ ...transform(category), children: transformCategoriesToMenuItems(category.children) })
    } else {
      return ({ ...transform(category) })
    }
  })
}

type Props = {
  categories: DataType
}

const StoreMenu: React.FC<Props> = ({ categories }) => {
  const navigate = useNavigate()
  const items = useMemo(() => transformCategoriesToMenuItems(categories.items), [categories.items]);
  const onClick: MenuProps["onClick"] = useCallback(
    (e: MenuDataItem) => {
      navigate(`category/${e.key}`)
    },
    []
  );
  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default StoreMenu;
