const initialState = {
    allContacts: [],
    contactPerCategory: [],
    detailsContact: [],
    showModalUpdate: false,
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_CONTACTS":
            return { ...state, allContacts: action.payload };
        case "CONTACT_PER_CATEGORY":
            return { ...state, contactPerCategory: action.payload };
        case "DETAILS_CONTACT":
            return { ...state, detailsContact: action.payload };
        case "SHOW_MODAL_UPDATE":
            return { ...state, showModalUpdate: action.payload };
        default:
            return state;
    }
};

export default contactReducer;
