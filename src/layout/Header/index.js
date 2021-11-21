import React, { useState } from 'react'
import moment from 'moment';
import { Layout, Menu, Row, Col, Button, Avatar } from 'antd';
import { EllipsisOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import Calendars from '../../components/Calendar';


const Headers = () => {
    const { Header } = Layout
    const [visiable, setVisiable] = useState(false)
    const today = moment().format('MMM DD')
    const yesterday = moment().subtract(1, 'day').format('MMM DD')
    const tomorow = moment().add(1, 'day').format('MMM DD')
    return (
        <>
            <Header style={{ backgroundColor: "#f5f6fa", display: 'flex', justifyContent: "space-between", width: '100%', padding: '0 16px' }}>
                <Row style={{ height: "100%", width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                    <Col style={{ display: 'flex' }} >
                        <Menu mode="horizontal" defaultSelectedKeys={['2']} selectable='false' style={{ backgroundColor: "#f5f6fa", width: '320px', fontSize: '20px', fontWeight: 600 }}>
                            <Menu.Item key="1">{yesterday}</Menu.Item>
                            <Menu.Item key="2">{today}</Menu.Item>
                            <Menu.Item key="3" >{tomorow}</Menu.Item>
                        </Menu>
                        <div style={{ height: "40%", margin: 'auto 0', borderRight: "1px solid #ccc" }} />
                        <div style={{ margin: '0 16px', fontSize: 28 }}>
                            <EllipsisOutlined onClick={() => setVisiable(true)} />
                        </div>
                    </Col>
                    <Col style={{ display: 'flex' }}>
                        <div style={{ margin: " 0 16px" }}>
                            <span>Category :</span>
                            <span style={{ fontSize: 16, color: "#8870fc", marginLeft: '8px' }}>3/4</span>
                        </div>
                        <div style={{ margin: " 0 16px" }}>
                            <Button shape='circle' size='medium' icon={<LeftOutlined />} style={{ backgroundColor: '#f5f6fa' }} />
                            <Button shape='circle' size='medium' icon={<RightOutlined />} style={{ marginLeft: '4px', backgroundColor: '#f5f6fa' }} />
                        </div>
                        <div style={{ height: "40%", margin: 'auto 4px', borderRight: "1px solid #ccc" }} />
                        <div style={{ margin: " 0 16px" }}>
                            <Avatar shape='square' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-A-Jfr2_qA-3MeksXVSCYSL64JwLWA1YtbA&usqp=CAU' />
                        </div>
                    </Col>
                </Row>
            </Header>
            <Calendars visible={visiable} onOk={() => setVisiable(false)} onCancel={() => setVisiable(false)} />
        </>
    )
}

export default Headers
