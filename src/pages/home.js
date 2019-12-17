import React, { Component } from 'react';
import ListHeader from '../components/listHeader'
import Line from '../components/renderChart'
import { Icon,Progress } from 'antd'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import '../style/header.css'
import '../style/home.css'
// import renderChart from '../components/renderChart';

class Home extends Component {
    constructor(props) {
        super(props);
        let id = ( '_' + Math.random()).replace('.','_')
        let XData = ['11-15','11-16','11-17','11-18','11-19','11-20','11-21']
        this.state = { 
            lineId1: 'line1' + id,
            lineId2: 'line2' + id,
            lineId3: 'line3' + id,
            lineId4: 'line4' + id,
            option1: {
                color: "#5C9ACF",
                XData: XData,
                YData: [143,44,56,332,156,248,149]
            },
            option2: {
                color: "#FF5B5B",
                XData: XData,
                YData: [1992,2334,2522,3385,335,3634,1629]
            },
            option3: {
                color: "#1CC09F",
                XData: XData,
                YData: [1000,421,568,323,155,2422,590]
            },
            option4: {
                color: "#FF5B5B",
                XData: XData,
                YData: [1422,4525,5757,389,154,2432,689]
            }
        }
    }
 
    render() { 
        return ( 
            <div style={{height: '100%'}}>
                <ListHeader title=""/>
                <div className="home">
                    <div className="pri-title">今日订单</div>
                    <div className="blank-box flex sbox">
                        {
                            orderList.map((item,index) => <div className="flex sub-box flex-1 flex-c" key={index}>
                                <Icon type={item.icon} style={{fontSize: '36px',color: item.color}}/>
                                <div className="middle">
                                    <div style={{fontSize: '16px'}}>{item.label}</div>
                                    <Progress percent={30} strokeColor={item.color} size="small"/>
                                </div>
                                <div className={`order-${index}`} style={{fontSize: '24px'}}>0</div>
                            </div>)
                        }
                    </div>
                    <div className="pri-title" style={{marginTop: '30px'}}>近七天订单</div>
                    <div className="flex">
                        <div className="blank-box bbox chart">
                            <div className="chart-title">订单数</div>
                            <Line id={this.state.lineId1} chart={this.state.option1}/>
                        </div>
                        <div className="blank-box bbox chart">
                            <div className="chart-title">订单金额</div>
                            <Line id={this.state.lineId2} chart={this.state.option2}/>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="blank-box bbox chart">
                            <div className="chart-title">订购商品数</div>
                            <Line id={this.state.lineId3} chart={this.state.option3}/>
                        </div>
                        <div className="blank-box bbox chart">
                            <div className="chart-title">收款金额</div>
                            <Line id={this.state.lineId4} chart={this.state.option4}/>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

const chartOption = {
    color: '#5C9ACF',
    grid: {
        width: '85%',
        right: '30px'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        axisTick: { show: false },
        axisLine: {
            lineStyle: {
                color: '#5C9ACF',
                width: 2
            }
        },
        axisPointer: {
            show: true
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        axisTick: { show: false },
        axisLine: { show: false }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
}
const orderList = [{
        label: "待付款",
        icon: "alipay-circle",
        color: '#FF5B5B'
    },{
        label: "待发货",
        icon: "clock-circle",
        color: '#5C9ACF'
    },{
        label: "待收货",
        icon: "car",
        color: '#1CC09F'
    },{
        label: "已完成",
        icon: "check-circle",
        color: '#666666'
    }]
export default Home;