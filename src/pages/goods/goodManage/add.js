import React, { useState, useEffect } from 'react'
import { Icon, Button, Form, Row, Col, Input, Select, InputNumber } from 'antd'
import ListHeader from '../../../components/listHeader'
import ImageLoad from '../../../components/upload'
import '../../../style/form.css'
const { Option } = Select
const { TextArea } = Input

function GoodForm(props) {
    const { getFieldDecorator } = props.form
    const [category, setCategory] = useState([])
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
    }
    useEffect(() => {
        // TODO: 请求接口获取数据
        const initData = [
            { id: 1, name: '服饰' },
            { id: 2, name: '家电' },
        ]
        setCategory(initData)
    },[])
    const save = () => {}
    const reset = () => {}
    const loadImage = (fileList) => {
        // TODO: 取到fileList提交给表单
    }
    const handleChange = (e) => {
        console.log(e)
    }
    return (
        <div>
            <ListHeader header={['商品管理', '新增']}>
                <div>
                    <Button onClick={save} shape="round" type="primary" className="btn">
                        保存
                    </Button>
                    <Button onClick={reset} shape="round">
                        重置
                    </Button>
                </div>
            </ListHeader>
            <div className="form-content">
                <div className="form-title">
                    <Icon type="profile" style={{ color: '#1890ff' }} />
                    <span>基本信息</span>
                </div>
                <Form {...layout}>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item label="商品名称">
                                {getFieldDecorator('name', {
                                    rules: [
                                        {
                                            type: 'string',
                                            required: true,
                                            message: '请输入商品名称',
                                        },
                                    ],
                                })(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="单位">
                                {getFieldDecorator('unit', {
                                    rules: [
                                        {
                                            type: 'string',
                                            required: true,
                                            message: '请输入单位',
                                        },
                                    ],
                                })(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="类别">
                                {getFieldDecorator('category', {
                                    rules: [
                                        {
                                            type: 'number',
                                            required: true,
                                            message: '请选择类别',
                                        },
                                    ],
                                })(
                                    <Select>
                                        {category.map(item => (
                                            <Option key={item.id} value={item.id}>
                                                {item.name}
                                            </Option>
                                        ))}
                                    </Select>,
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="状态">
                                {getFieldDecorator('status', {
                                    rules: [
                                        {
                                            type: 'string',
                                            required: true,
                                            message: '请选择状态',
                                        },
                                    ],
                                })(
                                    <Select>
                                        <Option key="up" value="up">
                                            上架
                                        </Option>
                                        <Option key="down" value="down">
                                            下架
                                        </Option>
                                    </Select>,
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="规格">
                                {getFieldDecorator('size')(<Input />)}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="售价">
                                {getFieldDecorator('sale', {
                                    rules: [
                                        {
                                            type: 'number',
                                            required: true,
                                            message: '请输入售价',
                                        },
                                    ],
                                })(<InputNumber min={0} />)}
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <div className="form-title">
                    <Icon type="area-chart" style={{ color: '#1890ff' }} />
                    <span>商品图册</span>
                </div>
                <ImageLoad onload={loadImage}/>
                <div className="form-title">
                    <Icon type="shopping" style={{ color: '#1890ff' }} />
                    <span>商品介绍</span>
                </div>
                <TextArea onChange={handleChange} />
            </div>
        </div>
    )
}
const GoodAdd = Form.create({})(GoodForm)
export default GoodAdd
