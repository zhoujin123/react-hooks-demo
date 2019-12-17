import React, { useEffect, useState } from 'react'
import { Icon, Button } from 'antd'
import ListHeader from '../../components/listHeader'
import '../../style/form.css'

function GoodAdd() {
    const save = () => {}
    const reset = () => {}
    return (
        <div>
            <ListHeader title="新增">
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
            </div>
        </div>
    )
}

export default GoodAdd
