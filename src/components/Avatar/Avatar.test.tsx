import React from "react";
import { render } from "@testing-library/react";

import AvatarComponent from "./Avatar";

describe("AvatarComponent", () => {
  test("render Avatar component", () => {
    render(
      <AvatarComponent
        image="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        imageDescription="some description"
      ></AvatarComponent>
    );
  });
});
