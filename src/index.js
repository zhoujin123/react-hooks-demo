import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import echarts from 'echarts/lib/echarts' 
React.echarts = echarts

ReactDOM.render(<Router />, document.getElementById('root'));
