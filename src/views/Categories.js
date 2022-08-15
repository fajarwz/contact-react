import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import getAllContact from "../redux/actions/getAllContact";
import CardContact from "../components/CardContact";
import Loading from "../components/Loading";

export default function Categories() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loadingReducer.loading);
  const allContacts = useSelector((state) => state.contactReducer.allContacts);
  const contactPerCategory = useSelector((state) => state.contactReducer.contactPerCategory);

  const params = useParams();

  useEffect(() => {
    dispatch(getAllContact())
  }, [dispatch]);

  useEffect(() => {
    const regex = new RegExp(params.category, "i");
    const myContact = allContacts.filter((contact) => {
      return regex.test(contact.category);
    });
    dispatch({ type: "CONTACT_PER_CATEGORY", payload: myContact });
  }, [params, allContacts, dispatch]);

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          {loading ? (
            <Loading/>
          ) : contactPerCategory.length === 0 ? (
            <div className="text-center m-2 p-4">Data not found</div>
          ) : (
            contactPerCategory.map((contact) => {
              return (
                <div key={contact.id} className="col-md-3 p-1">
                    <CardContact contact={contact}/>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
