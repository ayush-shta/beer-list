import React from 'react';
import { createPortal } from 'react-dom';

interface IModalDialogProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
}

function ModalDialog(props: IModalDialogProps) {
  const { title, children, isOpen } = props;

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="relative z-10 p-16" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-light bg-opacity-75 transition-opacity" />
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg p-8">
          <h3 className="text-3xl font-semibold mb-8">{title}</h3>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal')!
  );
}

export default ModalDialog;
