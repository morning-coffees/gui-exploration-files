import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleAlertCloseButton: () => void;
}

const Alert = ({ children, handleAlertCloseButton }: Props) => {
  return (
    <div className={"alert alert-primary alert-dismissible "} role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={handleAlertCloseButton}
      ></button>
    </div>
  );
};

export default Alert;
