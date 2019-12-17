import React, { useEffect, useState } from 'react';
import ListHeader from '../../components/listHeader'
import { Select, Input, Table, Button } from 'antd'
import { Link } from 'react-router-dom'
import '../../style/order.css'

const { Option } = Select
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center'
    },
    {
        title: '售价',
        dataIndex: 'sale',
        key: 'sale',
        align: 'center',
        sorter: true,
    },
    {
        title: '类别',
        dataIndex: 'type',
        key: 'type',
        align: 'center'
    },
    {
        title: '单位',
        dataIndex: 'unit',
        key: 'unit',
        align: 'center',
        sorter: true,
    },
    {
        title: '规格',
        dataIndex: 'size',
        key: 'size',
        sorter: true,
        align: 'center'
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        align: 'center'
    },
    {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate',
        align: 'center'
    }
]
function GoodList() {
    return (
        <div>
            <ListHeader title="商品管理">
                <Link to="/goods/add"><Button type="primary">+ 新增</Button></Link>
            </ListHeader>
            <div className="select">
                <span>名称</span>
                <Input placeholder="商品名称" style={{ width: 173}}/>
                <span>类别</span>
                <Select style={{ width: 173 }}></Select>
                <span>状态</span>
                <Select style={{ width: 173 }} defaultValue="up">
                    <Option value="up">上架</Option>
                    <Option value="down">下架</Option>
                </Select>
                <Button type="primary" className="btn">查询</Button>
                <Button>重置</Button>
            </div>
            <Table className="table" columns={columns} />
        </div>
    )
}
 
export default GoodList;