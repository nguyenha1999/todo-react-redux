import React from 'react'
import moment from 'moment'
import { Modal, Form, Input, TimePicker, message } from 'antd'

const ModalTodo = ({ visiable, onCancel }) => {
    const date = moment().format('MMM/DD/YY')
    const [form] = Form.useForm();
    const { TextArea } = Input;
    return (
        <>
            <Modal
                visible={visiable}
                title={`Lịch trình Ngày Hôm Nay (${date}) `}
                okText="Create"
                cancelText="Cancel"
                onCancel={onCancel}
                onOk={() => {
                    form
                        .validateFields()
                        .then(() => {
                            form.resetFields()
                        })
                        .catch((info) => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                >
                    <Form.Item
                        name='content'
                        label='Tiêu đề'
                        rules={[
                            {
                                required: true,
                                message: ' Hãy thêm tiêu đề công việc của bạn'
                            },
                        ]
                        }
                    >
                        <Input />
                    </Form.Item >
                    <Form.Item
                        name="contact"
                        label="Nội dung"
                        rules={[{
                            required: true,
                            message: 'Hãy thêm nội dung công việc'
                        }]}
                    >
                        <TextArea />
                    </Form.Item>
                    <Form.Item
                        name='time'
                        label='Thời Gian'
                        rules={[{
                            required: true,
                            message: 'Hãy Thêm Thời Gian Thực Hiện Công Việc'
                        }]}
                    >
                        <TimePicker.RangePicker />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ModalTodo
