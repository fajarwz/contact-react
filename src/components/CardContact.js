import { Link } from "react-router-dom";
import DeleteContact from "./DeleteContact";
import UpdateContact from "./UpdateContact";

export default function CardContact({ contact, fromDetail }) {
  return (
    <div className="card shadow radius">
      <div className="card-body">
        <h5>{contact.name}</h5>
        <p>{contact.email}</p>
        <p>{contact.phoneNumber}</p>
        <p>{contact.category}</p>
      </div>
      {fromDetail ? null : (
        <div className="card-footer">
          <Link to={`/details/${contact.id}`} className="btn btn-default">Details</Link>
          <UpdateContact idContact={contact.id}/>
          <DeleteContact idContact={contact.id} nameContact={contact.name}/>
        </div>
      )}
    </div>
  );
}
