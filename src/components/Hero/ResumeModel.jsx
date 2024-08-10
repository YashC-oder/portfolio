import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './ResumeModal.module.css'; 

export default function ResumeModal({ onClose }) {
  const dialog = useRef();
  const url = "https://docs.google.com/document/d/e/2PACX-1vTW_QfWGh1zUtg_8OqjOVGMOvPOHxlxAlzFcuzbIDDBf1MSwvV20MWHeSPelZM_XA/pub?embedded=true";
  useEffect(() => {
    const modal = dialog.current;
    modal.showModal();

    return () => {
      modal.close();
    };
  }, []);

  return createPortal(
    <dialog className={styles.modal} ref={dialog}>
      <iframe src={url}></iframe>
      <button className={styles.closeButton} onClick={onClose}>Close</button>
    </dialog>,
    document.getElementById("modal")
  );
}