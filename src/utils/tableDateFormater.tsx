const dataFormater = (data: any, ctx: any, store: any) => {
  let isChildren = false;
  let result: any = [];
  const children: any = [];
  const parents: any = [];

  const formater = (item: any) => ({ ...item, key: item.id });

  data.forEach((item: any) => {
    const formated = formater(item);
    if (item.parent_id) {
      isChildren = true;
      children.push(formated);
    } else {
      parents.push(formated);
    }
  });

  result = parents;
  if (isChildren) {
    isChildren = false;
    result = parents.map((parent: any) => {
      let newParent = parent;
      const filteredChild = children.filter(
        (child: any) => child.parent_id === parent.id
      );
      newParent.children = filteredChild;
      return newParent;
    });
  }

  return result;
};

const getColumns = (renderActions: any, data: any, ctx: any) => {
  const action: any = {
    title: "Action",
    key: "action",
    render: renderActions,
  };
  const columns = Object.keys(data[0])
    .filter((key) => key !== "image")
    .map((key: any) => ({
      title: key,
      dataIndex: key,
      value: key,
      key: key,
    }));
  return columns.concat(action);
};

const tableDateFormater = (
  store: any,
  tabContext: string,
  renderActions: any
) => {
  const ctxData = store[tabContext].data;

  return [
    Array.from(getColumns(renderActions, ctxData, tabContext)),
    Array.from(dataFormater(ctxData, tabContext, store)),
  ];
};


export const getFormatedData = (data: any) => {
  return data.map((item: any) => ({ ...item, key: item.id }));
};




export default tableDateFormater;
