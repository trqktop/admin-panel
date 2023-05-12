import { Spin } from "antd";
import Checkbox from "antd/lib/checkbox";
import { useContext } from "react";

import styles from "./StoreBrandFilter.module.scss";

const StoreBrandFilter = ({ brandFilterHandler }: any) => {
  // const {
  //   store: { brands },
  // } = useContext(Context);

  // const getOptions = (arr: any) => {
  //   return arr.map(({ id, name }: any) => ({
  //     label: name,
  //     value: id,
  //   }));
  // };

  // if (brands.events.success) {
  //   return (
  //     <aside className={styles.sider}>
  //       <Checkbox.Group
  //         options={getOptions(brands.data)}
  //         onChange={brandFilterHandler}
  //       />
  //     </aside>
  //   );
  // } else {
  //   return <Spin />;
  // }
  return <></>
};

export default StoreBrandFilter;
