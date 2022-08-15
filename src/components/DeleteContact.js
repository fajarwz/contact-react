import { useDispatch } from "react-redux/es/exports";

import Button from "react-bootstrap/Button";
import deleteContact from "../redux/actions/deleteContact";
import Swal from "sweetalert2";

export default function DeleteContact({ idContact, nameContact }) {
  const dispatch = useDispatch();

  const removeContact = (id, name) => {
    Swal.fire({
      title: "Delete Contact",
      text: `Delete ${name} contact?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D33",
      confirmButtonText: "Yes"
    })
    .then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteContact(id, name));
      }
    })
  };

  return (
    <>
      <Button
        variant="default"
        onClick={() => {
          removeContact(idContact, nameContact);
        }}
      >
        Delete Contact
      </Button>
    </>
  );
}
