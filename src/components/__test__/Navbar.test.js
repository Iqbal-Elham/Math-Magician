import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar";
​
describe("Navbar", () => {
  it("should return the number navlinks", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
    const navlinks = screen.getAllByRole("link");
    expect(navlinks).toHaveLength(3);
  });
​
  it("Should render the user interaction of navbar", () => {
    const tree = renderer.create(
        <Router>
          <Navbar />
        </Router>
    ).toJSON;
    expect(tree).toMatchSnapshot();
  })
});