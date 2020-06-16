import React from "react";

const ActionBar = props => {
  return (
    <div class="btn-group" role="group" aria-label="Basic example">
          <button
              onClick={props.onLock}
              type="button"
              class="btn btn-info">
              Block
          </button>
          <button
              onClick={props.onUnlock}
              type="button"
              className="btn btn-info">
              Unblock
          </button>
          <button
              onClick={props.onDelete}
              type="button"
              className="btn btn-danger">
              Delete
          </button>
    </div>
  );
};

export default ActionBar;
