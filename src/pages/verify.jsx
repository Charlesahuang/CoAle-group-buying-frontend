import React from 'react';

const PhoneVerificationPage = () => {
  return (
    <div className="phone-verification-page">
      <div className="verification-box">
        <h2>Phone Message Code</h2>
        <div className="input-group">
          <select id="areaCode">
            <option value="+86">+234</option>
            <option value="+1">+157</option>
            <option value="+44">+44</option>
          </select>
          <input type="text" id="phoneNumber" placeholder="Enter Phone" className='input-group-inputphone' />
        </div>
        <div className="input-group">
          <input type="text" id="phoneNumber" className="input-group-inputcode" placeholder="Enter Code" />
        </div>
        <button type="button">GetCode</button>
        <button type="submit">Verify</button>
      </div>
    </div>
  );
};

export default PhoneVerificationPage;
