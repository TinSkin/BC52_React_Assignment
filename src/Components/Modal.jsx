import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalTest({ content }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (content !== null) {
            handleShow()
        }
    }, [content])

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{content ? content.name : null}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row mt-2">
                        <img src={content ? content.image : null} alt={content ? content.name : null} width="100%" height="450px" />

                        <div className="">
                            <h3>Chi Tiết Sản Phẩm</h3>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Giá</td>
                                        <td>{content ? content.price : null}</td>
                                    </tr>
                                    <tr>
                                        <td>Mô tả</td>
                                        <td>{content ? content.description : null}</td>
                                    </tr>
                                    <tr>
                                        <td>Mô tả ngắn</td>
                                        <td>{content ? content.price : null}</td>
                                    </tr>
                                    <tr>
                                        <td>Số lượng</td>
                                        <td>{content ? content.quantity : null}</td>
                                    </tr>
                                    <tr>
                                        <td>Image Url</td>
                                        <td>{content ? content.image : null}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

;