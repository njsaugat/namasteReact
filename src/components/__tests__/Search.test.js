import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { mockData } from "../../mocks/data";
import Shimmer from "../Shimmer";

global.fetch = jest.fn(() => {
  //await fetch; await json
  //fetch().then.().then()
  //so first json will
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mockData);
    },
  });
});

test("shimmer should load on homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(20);
});

test("Restaurants should load on homepage.", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const restaurantList = body.getByTestId("restaurant-list");
  expect(restaurantList.children.length).toBe(20);
});

test("search for input food", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("search-btn")));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  const searchBtn = body.getByTestId("search-btn");
  fireEvent.click(searchBtn);

  const restaurantList = body.getByTestId("restaurant-list");
  expect(restaurantList.children.length).toBe(2);
});
