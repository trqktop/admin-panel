import React, { useCallback, useContext, useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Context } from "../../store";
import { useNavigate } from "react-router-dom";
import { MenuDataItem } from "@ant-design/pro-components";
// import classNames from "classnames";
type MenuItem = Required<MenuProps>["items"][number];

interface Category {
  id: number;
  name: string;
  parent_id: number | null;
  children: Category[] | null;
}

// const items = useMemo(
//   () => [
//     {
//       key: 0,
//       icon: <UserOutlined />,
//       label: "Главная",
//       onClick: (e: any) => {
//         navigate("");
//         selectedKey.current = 0;
//       },
//     },
//     {
//       key: 1,
//       icon: <UserOutlined />,
//       label: "Заказы",
//       onClick: (e: any) => {
//         navigate("orders");
//         selectedKey.current = 1;
//       },
//     },
//     {
//       key: 2,
//       icon: <VideoCameraOutlined />,
//       label: "Товары",
//       onClick: (e: any) => {
//         navigate("products");
//         selectedKey.current = 2;
//       },
//     },
//     {
//       key: 3,
//       icon: <UploadOutlined />,
//       label: "Категории",
//       onClick: (e: any) => {
//         navigate("categories");
//         selectedKey.current = 3;
//       },
//     },
//     {
//       key: 4,
//       icon: <UploadOutlined />,
//       label: "Брэнды",
//       onClick: (e: any) => {
//         navigate("brands");
//         selectedKey.current = 4;
//       },
//     },
//   ],
//   [navigate]
// );

function transformCategoriesToMenu(categories: Category[]): MenuItem[] {
  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    // icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      // icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const parents = categories.filter((item) => item.parent_id === null);
  const items: MenuItem[] = parents.map((parent: any) => {
    const children = categories.filter((item) => item.parent_id === parent.id);
    return getItem(
      parent.name,
      parent.id,
      // <SettingOutlined />,
      children.map((item) => getItem(item.name, item.id))
    );
  });
  return items;
}

const StoreMenu = () => {
  const {
    store: {
      categories: { events, data },
    },
  }: any = useContext(Context);
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = useCallback(
    (e: MenuDataItem) => {
      navigate(`category/${e.key}`);
    },
    [navigate]
  );

  if (events.success) {
    const items = transformCategoriesToMenu(data);
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
  }
  return null;
};

export default StoreMenu;
