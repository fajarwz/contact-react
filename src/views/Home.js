import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// action
import getAllContact from "../redux/actions/getAllContact";

import CardContact from "../components/CardContact";
import Loading from "../components/Loading";

import { Button, Modal } from "react-bootstrap";
import updateContact from "../redux/actions/updateContact";

import showModalUpdate from "../redux/actions/showModalUpdate";

export default function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loadingReducer.loading);
  const allContacts = useSelector((state) => state.contactReducer.allContacts);

  useEffect(() => {
    dispatch(getAllContact());
  }, [dispatch]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [category, setCategory] = useState("");

  const handleCloseModal = () => dispatch(showModalUpdate(false));

  const contact = useSelector((state) => state.contactReducer.detailsContact);
  const isShowModal = useSelector(
    (state) => state.contactReducer.showModalUpdate
  );

  const handleSubmit = () => {
    dispatch(
      updateContact(
        {
          user: {
            name,
            email,
            phoneNumber,
            category,
          },
        },
        contact.id
      )
    );

    resetForm();
    handleCloseModal();
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setCategory("");
  };

  useEffect(() => {
    setName(contact.name ?? "");
    setEmail(contact.email ?? "");
    setPhoneNumber(contact.phoneNumber ?? "");
    setCategory(contact.category ?? "");
  }, [contact]);

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          {loading ? (
            <Loading />
          ) : allContacts.length === 0 ? (
            <div className="text-center m-2 p-4">Data not found</div>
          ) : (
            allContacts.map((contact) => {
              return (
                <div key={contact.id} className="col-md-3 p-1">
                  <CardContact contact={contact} />
                </div>
              );
            })
          )}
        </div>
      </div>

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
    </>
  );
}
