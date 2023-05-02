import React, { Children, useContext } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Context } from '../../store';
type MenuItem = Required<MenuProps>['items'][number];


interface Category {
    id: number;
    name: string;
    parent_id: number | null;
    children: Category[] | null;
}

function transformCategoriesToMenu(categories: Category[]): MenuItem[] {
    function getItem(
        label: React.ReactNode,
        key?: React.Key | null,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem;
    }

    const items: MenuItem[] = [
        getItem('Одежда', 'sub-1', <SettingOutlined />, [
            getItem('Майки', '9'),
            getItem('Штаны', '10'),
            getItem('Куртки', '11'),
            getItem('Рубашки', '12'),
        ]),
        getItem('Обувь', 'sub-2', <SettingOutlined />, [
            getItem('Кеды', '13'),
            getItem('Кросовки', '14'),
            getItem('Сланцы', '15'),
        ]),
    ];
    return items
}

const onClick: MenuProps['onClick'] = (e) => {
    console.log('click', e);
};


const StoreMenu = () => {
    const { store: { categories: { events, data } } }: any = useContext(Context)
    if (events.success) {
        const items = transformCategoriesToMenu(data)
        console.log(data, items)
        return <Menu onClick={onClick} style={{ width: 256 }} mode="vertical" items={items} />
    }
    return null
}

export default StoreMenu