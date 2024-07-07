import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { onReset, targetTime, remTime },
  ref
) {
  const dialog = useRef();
  const userLost = remTime <= 0;
  const score = Math.round((1 - remTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>{!userLost ? "Your Score: " + score : "You Lost!"}</h2>
      <p>
        The target time was{" "}
        <strong>
          {targetTime} second{targetTime > 1 ? "s" : ""}.
        </strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{(remTime / 1000).toFixed(2)}</strong> seconds left.
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  , document.getElementById('modal'));
});

export default ResultModal;
