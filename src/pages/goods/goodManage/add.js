import React from 'react'
import { Icon, Button, Form, Row, Col, Input, Select, InputNumber } from 'antd'
import ListHeader from '../../../components/listHeader'
import '../../../style/form.css'
const { Option } = Select

function GoodAdd() {
    const save = () => {}
    const reset = () => {}
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
    }
    return (
        <div>
            <ListHeader header={["商品管理","新增"]}>
                <div>
                    <Button onClick={save} shape="round" type="primary" className="btn">保存</Button>
                    <Button onClick={reset} shape="round">重置</Button>
                </div>
            </ListHeader>
            <div className="form-content">
                <div className="form-title">
                    <Icon type="profile" style={{ color: '#1890ff' }} />
                    <span>基本信息</span>
                </div>
                <Form className="ant-advanced-search-form" {...layout}>
                    <Row gutter={24}>  
                        <Col span={12}>
                            <Form.Item label="商品名称">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="单位">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="类别">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="状态">
                                <Select defaultValue="up">
                                    <Option key="up" value="up">上架</Option>
                                    <Option key="down" value="down">下架</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="规格">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="售价">
                                <InputNumber min={0} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default GoodAdd
