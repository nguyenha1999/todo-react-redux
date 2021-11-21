import React from 'react'
import moment from 'moment'
import { CalendarOutlined, BarsOutlined, LineChartOutlined, SettingOutlined } from '@ant-design/icons'
import { Layout } from 'antd'

const Sidebar = () => {
    const { Sider } = Layout
    const time = moment().format('HH:mm')
    const today = moment().format('MMM DD')
    return (
        <div>
            <Sider style={{ backgroundColor: "#fff", minHeight: "100%", borderRadius: "4px" }} width="8vw">
                <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <img src={'/icon.png'} style={{ width: '60px', margin: ' 10px 20px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '24px', marginTop: '160px' }}>
                        <CalendarOutlined style={{ marginTop: '16px' }} />
                        <BarsOutlined style={{ marginTop: '16px' }} />
                        <LineChartOutlined style={{ marginTop: '16px' }} />
                        <SettingOutlined style={{ marginTop: '16px' }} />
                    </div>
                    <div style={{ margin: '160px auto 0 auto ', }}>
                        <span style={{ color: '#a28eff', fontSize: '20px', fontWeight: 500 }}>{time}</span>
                        <p>{today}</p>
                    </div>
                </div>
            </Sider >
        </div >
    )
}

export default Sidebar
