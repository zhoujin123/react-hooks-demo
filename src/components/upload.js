import React, { Component } from 'react'
import { Icon, Upload, Modal } from 'antd'
class ImageLoad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fileList: [],
            previewImage: '',
            previewVisible: false,
        }
    }
    handleChange = ({fileList}) => {
        this.setState({fileList})
        this.props.onload(fileList)
    }
    handlePreview = async(file) => {
        if(!file.url && !file.preview){
            file.preview = await this.getBase64(file.originFileObj)
        }
        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        })
    }
    getBase64 = (file) => {
        // 根据文件路径请求图片
        return new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result)
            reader.onerror = error => reject(error)
        })
    }
    handleCancel = () => {
        this.setState({
            previewVisible: false
        })
    }
    render() {
        const { fileList, previewVisible, previewImage } = this.state
        return (
            <div>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"   
                    listType="picture-card"
                    fileList={fileList}
                    onChange={this.handleChange}
                    onPreview={this.handlePreview}
                >
                    {fileList.length >= 8 ? null : <Icon type="plus" style={{ fontSize: 28, color: '#8c939d' }} />}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img src={previewImage} style={{width: '100%'}}/>
                </Modal>
            </div>
        )
    }
}

export default ImageLoad
