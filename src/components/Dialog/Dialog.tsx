import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "./styles.css";

export interface ButtonProps {
  buttonTitle: string;
  buttonTitleColor?: string;
  dialogTitle: string;
  dialogDescription?: string;
  buttonCloseTitle: string;
  formColor?: string;
}

const DialogComponent = (props: ButtonProps) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button
        className="Button violet"
        style={{ color: props.buttonTitleColor }}
      >
        {props.buttonTitle}
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">{props.dialogTitle}</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          {props.dialogDescription}
        </Dialog.Description>
        <fieldset className="Fieldset">
          <label
            className="Label"
            htmlFor="name"
            style={{
              color: props.formColor,
              boxShadow: `box-shadow: 0 0 0 1px ${props.formColor}`,
            }}
          >
            Name
          </label>
          <input
            className="Input"
            id="name"
            defaultValue="Pedro Duarte"
            style={{
              color: props.formColor,
            }}
          />
        </fieldset>
        <fieldset className="Fieldset">
          <label
            className="Label"
            htmlFor="username"
            style={{ color: props.formColor }}
          >
            Username
          </label>
          <input
            className="Input"
            id="username"
            defaultValue="@peduarte"
            style={{ color: props.formColor }}
          />
        </fieldset>
        <div
          style={{ display: "flex", marginTop: 25, justifyContent: "flex-end" }}
        >
          <Dialog.Close asChild>
            <button
              className="Button green"
            >
              {props.buttonCloseTitle}
            </button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogComponent;
