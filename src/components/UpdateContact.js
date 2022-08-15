import { useDispatch } from "react-redux/es/exports";
import getDetailsContact from "../redux/actions/getDetailsContact";

import Button from "react-bootstrap/Button";
import showModalUpdate from "../redux/actions/showModalUpdate";

export default function UpdateContact({ idContact }) {
  const dispatch = useDispatch();

  const detailContact = (id) => {
    dispatch(getDetailsContact(id));
  };

  const handleShowModal = () => dispatch(showModalUpdate(true));

  return (
    <>
      <Button
        variant="default"
        onClick={() => {
          detailContact(idContact);
          handleShowModal(true);
        }}
      >
        Update Contact
      </Button>
    </>
  );
}
