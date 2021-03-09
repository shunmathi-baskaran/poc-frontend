import React from "react";
import { shallow, mount } from "enzyme";
import { Accordian } from "../components/Accordian";
import Typography from "@material-ui/core/Typography";

describe("Check Accordian render", () => {
  const manageGlobalStore = jest.fn();
  it("should render", () => {
    const wrapper = shallow(
      <Accordian
        manageGlobalStore={manageGlobalStore}
      />
    );
    const typography = wrapper.find(Typography);
    expect(typography.length).toBe(2);
  });
//   it("should render 2 <InputFields />", () => {
//     const wrapper = shallow(
//       <Login
//         onLoginSuccess={onLoginSuccess}
//         manageGlobalStore={manageGlobalStore}
//       />
//     );
//     expect(wrapper.find(InputFields)).toHaveLength(2);
//   });
//   it("should render a submit button", () => {
//     const wrapper = shallow(
//       <Login
//         onLoginSuccess={onLoginSuccess}
//         manageGlobalStore={manageGlobalStore}
//       />
//     );
//     expect(wrapper.find(Button)).toHaveLength(1);
//   });
//   it("email check", () => {
//     const wrapper = shallow(
//       <Login
//         onLoginSuccess={onLoginSuccess}
//         manageGlobalStore={manageGlobalStore}
//       />
//     );
//     wrapper
//       .find(InputFields)
//       .find('[email="email"]')
//       .simulate("change", {
//         target: { name: "email", value: "anshula128@gmail.com" },
//       });
//     // console.log(email.debug())
//     // wrapper.update();
//     expect(
//       wrapper.find(InputFields).find('[email="email"]').prop("value")
//     ).toBe("anshula128@gmail.com");
//   });
//   it("password check", () => {
//     const wrapper = shallow(
//       <Login
//         onLoginSuccess={onLoginSuccess}
//         manageGlobalStore={manageGlobalStore}
//       />
//     );
//     wrapper
//       .find(InputFields)
//       .find('[password="password"]')
//       .simulate("change", {
//         target: { name: "password", value: "abcd" },
//       });
//     // console.log(email.debug())
//     // wrapper.update();
//     expect(
//       wrapper.find(InputFields).find('[password="password"]').prop("value")
//     ).toBe("abcd");
//   });
});
