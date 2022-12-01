import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { useDispatch, useSelector } from "react-redux"
import { setModal } from "../../../redux/actions/alertsActions";



const Modals = ({ children }) => {

  const { alerts } = useSelector(state => state)

  // 1=> login
  // 2 => User Sign up
  // 3 => User Sign up
  // 4 => Forgot Password
  // 5 => Business Info
  // 6 => Add Post
  // 7 => OTP
  // 8 => Change Password
  // 9 => Plans
  // 10 => Free trial
  // 8 => select User And provide

  const dispatch = useDispatch()

  const modalTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


  return (
    <Modal open={Boolean(alerts?.modal?.isOpen)} onClose={() => dispatch(setModal({
      isOpen: 0,
      type: 0
    }))}>
      {children}
    </Modal>

  );
}

export default Modals