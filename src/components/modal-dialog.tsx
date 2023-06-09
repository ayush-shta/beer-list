import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IModalDialogProps {
  title: string;
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

function ModalDialog(props: IModalDialogProps) {
  const { title, children, isOpen, closeModal } = props;

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', close);

    return () => document.removeEventListener('keydown', close);
  }, [closeModal]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 z-10 overflow-y-auto" onClick={closeModal}>
        <div className="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0">
          <div
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl font-semibold mb-8">{title}</h3>
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')!
  );
}

export default ModalDialog;
