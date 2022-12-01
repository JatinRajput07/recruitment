import {useState} from 'react';

const useModal = ()=>{
     const [modalType, setModalType] = useState(0);
     
     
     return {
         modalType,
         setModalType
     }
}

export default useModal;