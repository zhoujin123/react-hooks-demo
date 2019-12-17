import React, { useEffect, useState } from 'react'
import ListHeader from '../../components/listHeader'
import { Input, DatePicker, Select, Button, Table, Pagination, Tag, Modal } from 'antd'
import 'antd/dist/antd.css'
import '../../style/order.css'
import moment from 'moment'

const { RangePicker } = DatePicker
const { Option } = Select
const statusList = [
    { id: 1, label: '待付款' },
    { id: 2, label: '待发货' },
    { id: 3, label: '待收货' },
    { id: 4, label: '已完成' },
    { id: 5, label: '已取消' },
]
const colors = ['#FF5B5B', '#5C9ACF', '#1CC09F', '#666666', '#6c36e1a8']
const columns = [
    {
        title: '单号/下单时间',
        dataIndex: 'id',
        key: 'id',
        sorter: true,
        align: 'center',
        ellipsis: true,
    },
    {
        title: '客户',
        dataIndex: 'user',
        key: 'user',
        sorter: true,
        align: 'center',
        ellipsis: true,
    },
    {
        title: '商品金额',
        dataIndex: 'money',
        key: 'money',
        sorter: true,
        align: 'center',
        ellipsis: true,
    },
    {
        title: '交货时间',
        dataIndex: 'time',
        key: 'time',
        align: 'center',
        ellipsis: true,
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        ellipsis: true,
        render: status => (
            <Tag color={colors[status]}>{statusList.filter(i => i.id == status)[0].label}</Tag>
        ),
    },
    {
        title: '备注',
        dataIndex: 'comment',
        key: 'comment',
        align: 'center',
        ellipsis: true,
    },
    {
        title: '操作',
        dataIndex: 'operation',
        align: 'center',
        key: 'operation',
        render: () => {
            return <div className="operate">编辑</div>
        },
    },
]
const tableData = [
    {
        key: 1,
        id: '00102',
        user: 'lucy',
        money: 1200,
        time: '1574678938176',
        status: 1,
        comment: '请尽快发货',
    },
    {
        key: 2,
        id: '00134',
        user: 'mary',
        money: 1200,
        time: '1573401600000',
        status: 4,
        comment: '赠品发红色',
    },
    {
        key: 3,
        id: '01614',
        user: 'lily',
        money: 1200,
        time: '1573445421000',
        status: 2,
        comment: '快递请发韵达',
    },
]
const initQuery = {
    keywordsLike: '',
    daterange: [moment().subtract(1, 'd'), moment()],
    status: 1,
}
function Order() {
    const [dataSource, setDataSource] = useState([])
    const [sort, setSort] = useState([])
    const [pagination, setPagination] = useState({ page: 1, pageSize: 10 })
    // 初始进入页面,给默认数据
    useEffect(() => {
        getData()
    }, [pagination, sort])

    return (
        <div>
            <ListHeader title="订单" />
            <div className="select">
                <span>关键字</span>
                <Input
                    placeholder="单号/客户名称"
                    onChange={e => {
                        initQuery.keywordsLike = e.target.value
                    }}
                    style={{ width: 173 }}
                />
                <span>下单日期</span>
                <RangePicker
                    style={{ width: 350 }}
                    defaultValue={initQuery.daterange}
                    onChange={time => {
                        initQuery.daterange = time
                    }}
                />
                <span>状态</span>
                <Select
                    defaultValue={initQuery.status}
                    style={{ width: 173 }}
                    onChange={value => (initQuery.status = value)}
                >
                    {statusList.map(item => (
                        <Option value={item.id} key={item.id}>
                            {item.label}
                        </Option>
                    ))}
                </Select>
                <Button type="primary" className="btn" onClick={search}>
                    查询
                </Button>
                <Button type="text" onClick={reset}>
                    重置
                </Button>
            </div>
            <Table
                columns={columns}
                dataSource={dataSource}
                onChange={handleTableChange}
                pagination={false}
                className="table"
            />
            <Pagination
                showQuickJumper
                showSizeChanger
                total={50}
                showTotal={showTotal}
                onChange={(page, pageSize) => handlePage(page, pageSize)}
                onShowSizeChange={(current, size) => handlePage(current, size)}
                className="page"
            />
            <Modal title="订单-编辑"></Modal>
        </div>
    )
    function getData(reset = false) {
        setDataSource(tableData)
        let query = reset
            ? initQuery
            : {
                  filter: initQuery,
                  pagination: pagination,
                  sort: sort,
              }
        //TODO: 用query请求接口
        console.log(query)
    }
    function search() {
        let { daterange } = initQuery
        initQuery.daterange = [moment(daterange[0]).format('x'), moment(daterange[1]).format('x')]
        //TODO: 请求列表接口
        getData()
    }
    function reset() {
        getData(true)
    }
    function handlePage(page, pageSize) {
        setPagination({
            page: page,
            pageSize: pageSize,
        })
    }
    function handleTableChange(pagination, filters, sorter) {
        setSort([sorter.columnKey, sorter.order])
    }
    function showTotal(total) {
        return `共${total}条`
    }
}

export default Order
