import React from 'react';

import AppButton from '../app-button';

interface IFormFooterProps {
  isSubmitDisabled: boolean;
  onCancel: () => void;
}

function FormFooter(props: IFormFooterProps) {
  const { isSubmitDisabled, onCancel } = props;

  return (
    <div className="flex gap-4 justify-end">
      <AppButton type="button" buttonstyle="secondary" onClick={onCancel}>
        Cancel
      </AppButton>

      <AppButton type="submit" disabled={isSubmitDisabled}>
        Save
      </AppButton>
    </div>
  );
}

export default FormFooter;
