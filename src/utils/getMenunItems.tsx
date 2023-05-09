import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const getMenuItems = (
  navigate: any,
  selectedKey: any,
  selectedMenuCtx: any
) => [
  {
    key: 1,
    icon: <UserOutlined />,
    label: "Главная",
    onClick: (e: any) => {
      navigate("");
      selectedKey.current = 1;
    },
  },
  {
    key: 2,
    icon: <UserOutlined />,
    label: "Заказы",
    onClick: (e: any) => {
      navigate(""); //orders
      selectedKey.current = 2;
    },
  },
  {
    key: 3,
    icon: <VideoCameraOutlined />,
    label: "Товары",
    onClick: (e: any) => {
      selectedMenuCtx.current = "products";
      navigate("products"); //products
      selectedKey.current = 3;
    },
  },
  {
    key: 4,
    icon: <UploadOutlined />,
    label: "Категории",
    onClick: (e: any) => {
      navigate("categories"); //categories
      selectedMenuCtx.current = "categories";
      selectedKey.current = 4;
    },
  },
  {
    key: 5,
    icon: <UploadOutlined />,
    label: "Брэнды",
    onClick: (e: any) => {
      navigate("brands"); // brands
      selectedMenuCtx.current = "brands";
      selectedKey.current = 5;
    },
  },
];

export default getMenuItems;
