# Raycris-ui

It is a library with multiple components for React, these components can be use for Typescript and as well JavaScript. Below you will get all information how to use them.

# Usage



#### Inline code

`$ npm install raycris-ui`

#### Button Code 

    import { Button } from "raycris-ui";
    
    <Button
      background="#00d4ff"
      colorLabel="#FFFFFF"
      label="Click to win"
	  onClick={()=>cosole.log("hellow")}
    />

#### Avatar Code
    import { Avatar } from "raycris-ui";

    <AvatarComponent
      image="imageURL"
      imageDescription="description"
    />

#### Dialog Code
    import { Dialog } from "raycris-ui";

    <DialogComponent
      buttonCloseTitle="close button or save button"
      buttonTitle="display dialog"
      buttonTitleColor="#6353B5"
      dialogDescription="somes descriptions"
      dialogTitle="Some title"
      formColor="#6353B5"
    />
    
#### Alert Dialog Code
    import { AlertDialog } from "raycris-ui";

    <AlertDialogComponent
      buttonLabel="Delete account"
      dialgoDescription="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
      dialgoTitle="Are you absolutely sure?"
      saveButtonLabel="Yes, delete account"
    />
