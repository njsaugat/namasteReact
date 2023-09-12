import React from "react";
import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy",
    email: "dummy@mail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;
