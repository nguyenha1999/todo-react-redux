import React from 'react'
import { Calendar, Modal } from 'antd'
import ModalComponent from '../Modal'

const Calendars = ({ visible, onOk, onCancel }) => {
    const onPanelChange = (value, mode) => {
        console.log(value, mode)
    }
    return (
        <div>
            <Modal
                visible={visible}
                okText='Thêm'
                cancelText='Huỷ'
                onOk={onOk}
                onCancel={onCancel}
            >
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </Modal>
        </div>
    )
}

export default Calendars
