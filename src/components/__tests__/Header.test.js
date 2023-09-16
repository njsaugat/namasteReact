import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo"); //returns array
  expect(logo[0].src).toBe("http://localhost/dummy.jpg");
});

test("Online status should be green when online", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("🟢");
});
test("Cart should have 0 items when loading", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cartItems = header.getByTestId("cart-items");
  //   console.log(cartItems);
  expect(cartItems.innerHTML).toBe(`<li>Cart 0</li>`);
});

test("Home is displayed properly or not", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const home = header.getByTestId("home");
  expect(home.innerHTML).toBe("Home 🏠");
});

test("Load About Us component properly", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const about = header.getByTestId("about");

  expect(about.innerHTML).toBe("About Us 👋");
});

test("check if contact is loaded", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const contact = header.getByTestId("contact");

  expect(contact.innerHTML).toBe("Contact Us 👋");
});
