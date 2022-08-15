import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import CardContact from "../components/CardContact";

import getDetailsContact from "../redux/actions/getDetailsContact";

export default function Details() {
  const dispatch = useDispatch();
  const params = useParams();
  const contact = useSelector((state) => state.contactReducer.detailsContact);

  useEffect(() => {
    dispatch(getDetailsContact(params.id))
  }, [dispatch, params.id])

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className="w-50">
              <CardContact contact={contact} fromDetail={true}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
