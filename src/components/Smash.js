import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import MatchHistory from "./MatchHistory";
import Stats from "./Stats";

import data from "../data";

export default function History() {
  console.log(data);
  return (
    <div>
      <p>Hello, my name is Conner.</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
