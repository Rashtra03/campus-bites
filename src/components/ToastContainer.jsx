import React, { useEffect, useState } from 'react';

function Toast({ toast }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLeaving(true), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`toast ${toast.type}${toast.leaving || leaving ? ' leaving' : ''}`}>
      {toast.imgSrc ? (
        <>
          <img className="toast-img" src={toast.imgSrc} alt="" />
          <span>{toast.msg}</span>
        </>
      ) : (
        <span>{toast.type === 'success' ? '✅' : '❌'}&nbsp; {toast.msg}</span>
      )}
    </div>
  );
}

export default function ToastContainer({ toasts }) {
  return (
    <div className="toast-container" id="toastContainer">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
}
