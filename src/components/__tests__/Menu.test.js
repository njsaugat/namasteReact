import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import RestaurantMenu from "../RestaurantMenu";
import { menuData } from "../../mocks/data";
import Header from "../Header";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(menuData);
    },
  });
});

test("update cart when click on add item", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("menu-items")));
  const addItemBtn = body.getAllByTestId("add-item-btn");
  fireEvent.click(addItemBtn[0]);

  const cartItems = body.getByTestId("cart-items");
  expect(cartItems.innerHTML).toBe(`<li>Cart 1</li>`);
});
