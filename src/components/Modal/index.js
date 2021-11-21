import React from 'react'
import { Modal } from 'antd'
import PropTypes from 'prop-types'

const ModalComponent = ({ children, title, width, footer, onOk, onCancel, visible, okText, cancelText }) => {
    return (
        <>
            <Modal
                visible={visible}
                centered
                title={title}
                okText=''
                cancelText=""
                onCancel={() => onCancel}
                onOk={() => onOk}
                width={width}
                footer={null}
            >
                {children}
            </Modal>
        </>
    )
}
ModalComponent.propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool,
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    width: PropTypes.number,
    footer: PropTypes.array
}
ModalComponent.defaultProps = {
    placeholder: "",
}

export default ModalComponent
