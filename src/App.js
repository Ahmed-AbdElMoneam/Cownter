import { useState } from "react";
import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import { pledgeRef, updateRef } from "./firebase";
import { addDoc, updateDoc } from "@firebase/firestore";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);

  const handleGetData = (azkar, juzs, azkar_total, user_total, users_total) => {
    setData({
      azkar: azkar,
      juzs: juzs,
      user_total: [...user_total, ...azkar_total],
      users_total: users_total,
    });
  };

  const handleSubmit = (e, name, id, validator) => {
    e.preventDefault();
    if (!name) {
      alert("Please Enter a valid Name");
    } else if (!id || !validator) {
      alert("Please Enter a valid E-mail");
    } else {
      let arr = [];
      data.users_total.map((zikr) => {
        const record = data.user_total.find(
          (userRecord) => userRecord.zikr_type === zikr.zikr_type
        );

        if (record) {
          arr.push({
            zikr_type: zikr.zikr_type,
            count: Number(zikr.count) + Number(record.count),
          });
        } else {
          arr.push({
            zikr_type: zikr.zikr_type,
            count: Number(zikr.count),
          });
        }
      });
      let pledgeData = {
        azkar: data.azkar,
        juzs: data.juzs,
        user_total: data.user_total,
        name: name,
        id: id,
      };
      let totalData = {
        users_total: arr,
      };
      updateDoc(updateRef, totalData);
      addDoc(pledgeRef, pledgeData).then(() => {
        setSuccess(true);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
    }
  };

  return (
    <div className="App">
      <div
        className="container"
        style={{ display: `${openModal ? "none" : "flex"}` }}
      >
        <div className="title-section">
          <Title />
        </div>
        <div className="content-section">
          <Form setOpenModal={setOpenModal} handleGetData={handleGetData} />
        </div>
      </div>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          handleSubmit={handleSubmit}
          success={success}
        />
      )}
    </div>
  );
}

export default App;
