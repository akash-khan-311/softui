/* eslint-disable react/no-unescaped-entities */
import Modal1 from "../../components/App/Modals/Modal1";
import Modal2 from "../../components/App/Modals/Modal2";
import Modal3 from "../../components/App/Modals/Modal3";
import Modal4 from "../../components/App/Modals/Modal4";

const Modal = () => {
  return (
    <div>
      {/* Default Modal */}
      <Modal1 />
      {/* Large Modal */}
      <Modal2 />
      {/* Background Blur Modal */}
      <Modal3 />
      <Modal4/>
    </div>
  );
};

export default Modal;
