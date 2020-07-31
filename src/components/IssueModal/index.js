import React from "react";
import { Modal } from "react-bootstrap";

const IssueModal = ({ showModal, setShowModal, selectedIssue }) => {
  return (
    <div>
      {selectedIssue && (
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {selectedIssue.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default IssueModal;
