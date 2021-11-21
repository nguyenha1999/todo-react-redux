import React from 'react'
import { Card, Row, Col, Button } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

const CardTodo = (props) => {
    return (
        <div>
            <div>
                <Card style={{ borderRadius: '8px', marginTop: '8px' }}>
                    <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Col span={6} style={{ borderLeft: '4px solid #feb721' }}>
                            <div>
                                <Button size='large' shape='circle' style={{ marginLeft: '40px', backgroundColor: '#fdf2d6', border: '#fdf2d6' }} >
                                    <CheckOutlined style={{ color: '#ffc347', fontSize: 16, fontWeight: 600 }} />
                                </Button>
                            </div>
                        </Col>
                        <Col span={18} style={{ paddingLeft: '32px' }}>
                            <div>
                                <h3 style={{ margin: 0 }}>{props.content}</h3>
                                <h4 style={{ margin: 0, color: '#a9b2c0' }} > {props.context}</h4>
                                <span style={{ color: '#feb623', fontSize: '16px', fontWeight: 600 }}>12:30 - 13:30</span>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div >

    )
}

export default CardTodo
