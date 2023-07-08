import { ReactNode } from "react";

interface Props {
  children: string;
  color: string;
  onClose: () => void;
}
const Alert = ({ children, color, onClose }: Props) => {
  return (
    <div
      className={"alert alert-" + color + " alert-dismissible fade show"}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
        // style="display:none"
      ></button>
    </div>
  );
};

export default Alert;
