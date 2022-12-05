import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./styles.css";

export interface AlertDialogProps {
  buttonLabel: string;
  saveButtonLabel: string;
  dialgoTitle: string;
  dialgoDescription: string;
  onClick: undefined;
}

const AlertDialogComponent = (props: AlertDialogProps) => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button className="Button violet">{props.buttonLabel}</button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="AlertDialogOverlay" />
      <AlertDialog.Content className="AlertDialogContent">
        <AlertDialog.Title className="AlertDialogTitle">
          {props.dialgoTitle}
        </AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
          {props.dialgoDescription}
        </AlertDialog.Description>
        <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
          <AlertDialog.Cancel asChild>
            <button className="Button mauve">Cancel</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className="Button red" onClick={props.onClick}>
              {props.saveButtonLabel}
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default AlertDialogComponent;
