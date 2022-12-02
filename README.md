# Raycris-ui

It is a library with multiple components for React, these components can be use for Typescript and JavaScrit. Below you will get all information how to use them.

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