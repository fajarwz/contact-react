import { useDispatch } from "react-redux";
import { useState } from "react";
import addContact from "../redux/actions/addContact";
import { Button, Modal } from "react-bootstrap";
import Toast from "./Toast";

export default function AddContact() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");

  const [isShowModal, setIsShowModal] = useState(false);

  const handleCloseModal = () => setIsShowModal(false);
  const handleOpenModal = () => setIsShowModal(true);

  const handleSubmit = () => {
    if (name === '' || email === '' || phoneNumber === '' || category === '') {
      Toast.fire({
        icon: "error",
        title: "All fields are required",
      });
    } else {
      dispatch(
        addContact({
          user: {
            name,
            email,
            phoneNumber,
            category,
          },
        })
      );
  
      resetForm();
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setCategory("");
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpenModal}>
        Add Contact
      </Button>

      <Modal show={isShowModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone-number" className="form-label">
              Phone Number
            </label>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              className="form-control"
              id="phone-number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              <option value="" disabled>
                Choose
              </option>
              <option value="family">Family</option>
              <option value="friend">Friend</option>
              <option value="work">Work</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <div
        className="modal fade"
        id="add-contact"
        tabIndex="-1"
        aria-labelledby="add-contact-label"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="add-contact-label">
                Add Contact
              </h5>
              <button
                onClick={resetForm}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    id="name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone-number" className="form-label">
                    Phone Number
                  </label>
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="text"
                    className="form-control"
                    id="phone-number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="form-select"
                  >
                    <option value="" disabled>
                      Choose
                    </option>
                    <option value="family">Family</option>
                    <option value="friend">Friend</option>
                    <option value="work">Work</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  onClick={resetForm}
                  type="button"
                  className="btn btn-default"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
}
