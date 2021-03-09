import React from "react";
import { shallow } from "enzyme";
import { Login } from "./Login";
import InputFields from "./InputFields";
import Button from "@material-ui/core/Button";

describe("Check login renders", () => {
  const onLoginSuccess = jest.fn();
  const manageGlobalStore = jest.fn();
  it("should render form", () => {
    const wrapper = shallow(
      <Login
        onLoginSuccess={onLoginSuccess}
        manageGlobalStore={manageGlobalStore}
      />
    );
    const inputs = wrapper.find("form");
    expect(inputs.length).toBe(1);
  });
  it("should render 2 <InputFields />", () => {
    const wrapper = shallow(
      <Login
        onLoginSuccess={onLoginSuccess}
        manageGlobalStore={manageGlobalStore}
      />
    );
    expect(wrapper.find(InputFields)).toHaveLength(2);
  });
  it("should render a submit button", () => {
    const wrapper = shallow(
      <Login
        onLoginSuccess={onLoginSuccess}
        manageGlobalStore={manageGlobalStore}
      />
    );
    expect(wrapper.find(Button)).toHaveLength(1);
  });
  it("email check", () => {
    const wrapper = shallow(
      <Login
        onLoginSuccess={onLoginSuccess}
        manageGlobalStore={manageGlobalStore}
      />
    );
    wrapper
      .find(InputFields)
      .find('[email="email"]')
      .simulate("change", {
        target: { name: "email", value: "anshula128@gmail.com" },
      });
    // console.log(email.debug())
    // wrapper.update();
    expect(
      wrapper.find(InputFields).find('[email="email"]').prop("value")
    ).toBe("anshula128@gmail.com");
  });
  it("password check", () => {
    const wrapper = shallow(
      <Login
        onLoginSuccess={onLoginSuccess}
        manageGlobalStore={manageGlobalStore}
      />
    );
    wrapper
      .find(InputFields)
      .find('[password="password"]')
      .simulate("change", {
        target: { name: "password", value: "abcd" },
      });
    // console.log(email.debug())
    // wrapper.update();
    expect(
      wrapper.find(InputFields).find('[password="password"]').prop("value")
    ).toBe("abcd");
  });
});
