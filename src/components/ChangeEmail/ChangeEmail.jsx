import React, { useState } from 'react';
import { changeEmail, verifyNewEmail } from '../../services/API_proyect/user.service';
import './ChangeEmail.css';
import useChangeEmailError from '../../hooks/useChangeEmail'; // replace with your actual path

const ChangeEmail = () => {
  const [newEmail, setNewEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [step, setStep] = useState(1);
  const [changeEmailOK, setChangeEmailOK] = useState(false);

  const handleEmailChange = async () => {
    try {
      const response = await changeEmail({ newEmail });
      useChangeEmailError(response, setChangeEmailOK);
      if (response.status === 200) {
        setStep(2);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCodeConfirmation = async () => {
    try {
      const response = await verifyNewEmail({ confirmationCode });
      useChangeEmailError(response, setChangeEmailOK);
      if (response.status === 200) {
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {step === 1 ? (
        <div>
          <p className="changeEmail-text-new-email">Cambio del Email</p>
          <div className="changeEmail_container-new-email-general">
            <input
              className="changeEmail_container-new-email"
              type="email"
              placeholder="Introduzca el nuevo email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <button onClick={handleEmailChange}>Change Email</button>
          </div>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter confirmation code"
            value={confirmationCode}
            onChange={(e) => setConfirmationCode(e.target.value)}
          />
          <button onClick={handleCodeConfirmation}>Confirm Code</button>
        </div>
      )}
    </div>
  );
};

export default ChangeEmail;
