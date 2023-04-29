const columnNames = ["id", "name"];

const dataFormater = (data: any) => {
  return data.map((item: any) => {
    let children = null;
    let id = item.parent_id ? item.parent_id + item.id : item.id;
    if (item.children) {
      if (item.children.length > 0) {
        children = dataFormater(item.children);
      }
    }
    return { ...item, key: id, children: children };
  });
};
const getColumns = (renderActions: any) => {
  const action: any = {
    title: "Action",
    key: "action",
    render: renderActions,
  };

  const result = columnNames.map((key) => ({
    title: key,
    dataIndex: key,
    key: key,
  }));
  result.push(action);
  return result;
};

const getTableData = (ctx: any, renderActions: any) => {
  if (ctx.id > 1) {
    return [getColumns(renderActions), dataFormater(ctx.data)];
  }
};

export default getTableData;
