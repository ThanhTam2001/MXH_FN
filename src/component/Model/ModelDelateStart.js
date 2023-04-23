import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { deleteStart } from '../../services/apiServices';

import { any } from 'prop-types';
const ModelDelateStart  = (props) =>{
    const { show, setShow ,shoModalDelete} = props

    const handleClose = () => {
      setShow(false)
     
    };

    console.log('Check 1111',shoModalDelete)
    const handleSubmitDelete = async() =>{
      let data = await deleteStart(shoModalDelete.status_id)      
      if (data && data.EC === 0) {
        handleClose()
        await props.fetch()

      }
     
    }

  
    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Xóa bài viết</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {shoModalDelete && shoModalDelete.status_id ? shoModalDelete.status_id : "không có" }

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Đóng
            </Button>
            <Button variant="primary" onClick={() =>handleSubmitDelete()}>
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default ModelDelateStart