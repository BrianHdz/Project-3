import React from "react";
import "./message.css";
import NewMessage from "./NewMessage";

export default function MessageNav() {
  return (
    <React.Fragment>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#messageModal"
      >
        Compose Message
      </button>
      <div
        class="modal fade"
        id="messageModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="messageModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="messageModalLabel">
                New Message
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <NewMessage />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
