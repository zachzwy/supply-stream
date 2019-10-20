import { createContext } from "react";

const MyContext = createContext({
  userInputs: {
    from: "",
    to: ""
  },
  itemOptions: [
    { value: "size-i", description: "Item A" },
    { value: "size-ii", description: "Item B" },
    { value: "size-iii", description: "Item C" },
    { value: "size-iv", description: "Item D" }
  ]
});

export default MyContext;
