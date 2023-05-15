
import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import Search from 'antd/es/input/Search';
const SearchForm = ({ onSearch }: any) => {

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );

    return <Space direction="vertical">
        {/* <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} />
        <Search
            addonBefore="https://"
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{ width: 304 }}
        /> */}
        <Search placeholder="input brand, product name or category" onSearch={onSearch} enterButton />
        {/* <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
        /> */}
        {/* <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={onSearch}
        /> */}
    </Space>
}

export default SearchForm