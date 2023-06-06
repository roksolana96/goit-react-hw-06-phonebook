// import PropTypes from 'prop-types';
import { DeleteBtn,ContactName } from './ContactList.styled';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilteredUser, getContacts  } from 'redux/Selectors';
import { deleteContact } from 'redux/ContactsSlice';

export const ContactList = () => {
  const contactUser = useSelector(getContacts);
  const filteredUser = useSelector(getFilteredUser);
  const dispatch = useDispatch();

  const normalizeFilteredUser = filteredUser.toLowerCase();
  const visibleContact = contactUser.filter(el =>
    el.name.toLowerCase().includes(normalizeFilteredUser)
  );

    return (
        <ul>
          {visibleContact.map(({ id, number, name }) => {
            return (
              <ContactName key={id}>
                <span>
                  {name}: {number}
                </span>
                <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </DeleteBtn>
              </ContactName>
            );
          })}
        </ul>
  );
};


// const getVisibleContact = () => {
//     const normalizeFilter = filter.toLowerCase();
    
//     return contacts.filter(el =>
//       el.name.toLowerCase().includes(normalizeFilter)
//     );
//   };





// ContactList.propTypes = {
//     visibleContact: PropTypes.arrayOf(PropTypes.object).isRequired,
//     deleteContacts: PropTypes.func.isRequired,
//   };



//   export const ContactList = ({ visibleContact, deleteContacts }) => {
//     return (
//         <ul>
//           {visibleContact.map(({ id, number, name }) => {
//             return (
//               <ContactName key={id}>
//                 <span>
//                   {name}: {number}
//                 </span>
//                 <DeleteBtn type="button" onClick={() => deleteContacts(id)}>
//               Delete
//             </DeleteBtn>
//               </ContactName>
//             );
//           })}
//         </ul>
//   );
// };