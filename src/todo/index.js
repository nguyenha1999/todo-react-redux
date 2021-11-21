import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EllipsisOutlined, CheckOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons'
import { Row, Col, Badge, Card, Button, Progress, Dropdown, Menu } from 'antd'
import ModalTodo from './components/ModalTodo'
import CardTodo from './components/CardTodo'
import { getListTodo } from '../store/actions/Todo'
import { getListTodoWord } from '../store/actions/Word'
import { getListTodoOther } from '../store/actions/Other'

const Todo = () => {
    const dispatch = useDispatch()

    const todos = useSelector(state => state.todo.items) ?? [];
    const words = useSelector(state => state.word.word) ?? [];
    console.log(words)
    const others = useSelector(state => state.other.other) ?? [];
    console.log(todos)

    useEffect(() => {
        dispatch(getListTodo())
    }, [])
    useEffect(() => {
        dispatch(getListTodoOther())
    }, [])
    useEffect(() => {
        dispatch(getListTodoWord())
    }, [])
    const [visiable, setVisiable] = useState(false);
    const menu = (
        <Menu>
            <Menu.Item key="1">
                Tất Cả
            </Menu.Item>
            <Menu.Item key="2">
                Việc Đã Hoàn Thành
            </Menu.Item>
            <Menu.Item key="3">
                Việc Đang Chờ Thực Hiện
            </Menu.Item>
        </Menu>
    );
    return (
        <>
            <div style={{ marginTop: '40px' }}>
                <Row gutter={32}>
                    {/* col1 */}
                    <Col span={8} >
                        <div style={{ display: 'flex' }}>
                            <Badge color={'#668cfe'} />
                            <h3 style={{ margin: 0 }}>Công Việc</h3>
                            <Dropdown overlay={menu}>
                                <EllipsisOutlined style={{ margin: '0 16px', fontSize: 28 }} />
                            </Dropdown>
                        </div>
                        <div>
                            {words.length > 0 ? (
                                <>
                                    {
                                        words.map(word => (
                                            <CardTodo
                                                key={word.id}
                                                content={word.content}
                                                context={word.context}
                                            />
                                        ))
                                    }
                                </>)
                                : ('')}
                        </div>
                        <div>
                            <Card style={{ borderRadius: '8px', marginTop: '8px' }}>
                                <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Col span={6} style={{ borderLeft: '4px solid #668cfe' }}>
                                        <div>
                                            <Button
                                                size='large'
                                                shape='circle'
                                                style={{ marginLeft: '40px', backgroundColor: '#eff6ff', border: '#eff6ff' }}
                                            >
                                                <CheckOutlined style={{ color: '#7b9dfe', fontSize: 16, fontWeight: 600 }} />
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col span={18} style={{ paddingLeft: '32px' }}>
                                        <div>
                                            <h3 style={{ margin: 0 }}>Tiêu đề</h3>
                                            <h4 style={{ margin: 0, color: '#a9b2c0' }}> Nội dung</h4>
                                            <span style={{ color: '#7b9dfe', fontSize: '16px', fontWeight: 600 }}>12:30 - 13:30</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ marginTop: '8px', backgroundColor: '#c9f9eb', borderRadius: '8px' }}>
                                <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Col span={6} style={{ borderLeft: '4px solid #3ae5d2' }}>
                                        <div>
                                            <Button size='large' shape='circle' style={{ marginLeft: '40px', backgroundColor: '#2ae2be', border: '#eff6ff' }} >
                                                <CheckOutlined style={{ color: '#fff', fontSize: 16, fontWeight: 600 }} />
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col span={18} style={{ paddingLeft: '32px' }}>
                                        <div>
                                            <h3 style={{ margin: 0 }}>Tiêu đề</h3>
                                            <h4 style={{ color: '#66aca4', margin: '0' }} > Nội dung</h4>
                                            <span style={{ color: '#3ad0c2', fontSize: '16px', fontWeight: 600 }}>12:30 - 13:30</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                        <div style={{ display: 'flex', marginTop: '30px', paddingTop: '24px', borderTop: '2px solid #e5e7f1', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <span>Bạn Đã Hoàn Thành : </span>
                                <span style={{ color: '#ff954f', fontWeight: 600, fontSize: '16px' }}> 1 / 3</span>
                                <Progress percent={50} showInfo={false} strokeColor={'#ff954f'} trailColor={'#dce0ea'} style={{ width: '112px', display: 'block' }} />
                            </div>
                            <div>
                                <Button
                                    shape='circle'
                                    size='large'
                                    style={{ color: '#fff', backgroundColor: '#6087ff', border: '#6087f' }}
                                    onClick={() => setVisiable(true)}
                                >
                                    <PlusOutlined />
                                </Button>
                                <span style={{ marginLeft: '6px', fontWeight: 600 }}>Thêm Công Việc</span>
                            </div>
                        </div>

                    </Col>
                    {/* col2 */}
                    <Col span={8} >
                        <div style={{ display: 'flex' }}>
                            <Badge color={'orange'} />
                            <h3 style={{ margin: 0 }}>Ở Nhà</h3>
                            <EllipsisOutlined style={{ margin: '0 16px', fontSize: 28 }} />
                        </div>
                        <div>
                            {todos.length > 0 ? (
                                <>
                                    {todos.map(card => (
                                        <CardTodo
                                            key={card.id}
                                            content={card.content}
                                            context={card.context}
                                        />
                                    ))}
                                </>
                            ) : ('')
                            }
                        </div>

                        <div style={{ display: 'flex', marginTop: '30px', paddingTop: '24px', borderTop: '2px solid #e5e7f1', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <span>Bạn Đã Hoàn Thành : </span>
                                <span style={{ color: '#ff954f', fontWeight: 600, fontSize: '16px' }}> 1 / 3</span>
                                <Progress percent={50} showInfo={false} strokeColor={'#ff954f'} trailColor={'#dce0ea'} style={{ width: '112px', display: 'block' }} />
                            </div>
                            <div>
                                <Button
                                    shape='circle'
                                    size='large'
                                    style={{ color: '#fff', backgroundColor: '#feb722', border: '#feb722' }}
                                    onClick={() => setVisiable(true)}
                                >
                                    <PlusOutlined />
                                </Button>
                                <span style={{ marginLeft: '6px', fontWeight: 600 }}>Thêm Công Việc</span>
                            </div>
                        </div>
                    </Col>
                    {/* col3 */}
                    <Col span={8} >
                        <div style={{ display: 'flex' }}>
                            <Badge color={'purple'} />
                            <h3 style={{ margin: 0 }}>Khác</h3>
                            <EllipsisOutlined style={{ margin: '0 16px', fontSize: 28 }} />
                        </div>
                        <div>
                            {others.length > 0 ? (
                                <>
                                    {
                                        others.map(other => (
                                            <CardTodo
                                                key={other.id}
                                                content={other.content}
                                                context={other.context}
                                            />
                                        ))
                                    }

                                </>
                            ) : ('')}
                        </div>
                        <div>
                            <Card style={{ borderRadius: '8px', marginTop: '8px' }}>
                                <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Col span={6} style={{ borderLeft: '4px solid #8970ff' }}>
                                        <div>
                                            <Button size='large' shape='circle' style={{ marginLeft: '40px', backgroundColor: '#eff6ff', border: '#eff6ff' }} >
                                                <CheckOutlined style={{ color: '#8c72ff', fontSize: 16, fontWeight: 600 }} />
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col span={18} style={{ paddingLeft: '32px' }}>
                                        <div>
                                            <h3 style={{ margin: 0 }}>Tiêu đề</h3>
                                            <h4 style={{ margin: 0, color: '#a9b2c0' }} > Nội dung</h4>
                                            <span style={{ color: '#8a72fe', fontSize: '16px', fontWeight: 600 }}>12:30 - 13:30</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                        <div>
                            <Card style={{ marginTop: '8px', backgroundColor: '#ffeae9', borderRadius: '8px' }}>
                                <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Col span={6} style={{ borderLeft: '4px solid #ff7f7e' }}>
                                        <div>
                                            <Button size='large' shape='circle' style={{ marginLeft: '40px', backgroundColor: '#ff807d', border: '#eff6ff' }} >
                                                <CloseOutlined style={{ color: '#fff', fontSize: 16, fontWeight: 600 }} />
                                            </Button>
                                        </div>
                                    </Col>
                                    <Col span={18} style={{ paddingLeft: '32px' }}>
                                        <div>
                                            <h3 style={{ margin: 0 }}> Tiêu đề</h3>
                                            <h4 style={{ color: '#b87475', margin: '0' }} > Nội dung</h4>
                                            <span style={{ color: '#ffa5a4', fontSize: '16px', fontWeight: 600 }}>12:30 - 13:30</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                        <div style={{ display: 'flex', marginTop: '30px', paddingTop: '24px', borderTop: '2px solid #e5e7f1', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <span>Bạn Đã Hoàn Thành : </span>
                                <span style={{ color: '#ff954f', fontWeight: 600, fontSize: '16px' }}> 1 / 3</span>
                                <Progress percent={50} showInfo={false} strokeColor={'#ff954f'} trailColor={'#dce0ea'} style={{ width: '112px', display: 'block' }} />
                            </div>
                            <div>
                                <Button shape='circle' size='large' style={{ color: '#fff', backgroundColor: '#8970ff', border: '#8970ff' }}>
                                    <PlusOutlined />
                                </Button>
                                <span style={{ marginLeft: '6px', fontWeight: 600 }}>Thêm Công Việc</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div >
            <ModalTodo visiable={visiable} onCancel={() => setVisiable(false)} />
        </>
    )
}

export default Todo
