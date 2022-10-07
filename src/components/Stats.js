import { useState } from "react";
import { Flex } from "@chakra-ui/react";

import { generateStats } from "../utils";

export default function Stats({ data }) {
  const [selectedCompetitor, setSelectedCompetitor] = useState(0);
  // const [competitors, stats] = generateStats(data);

  return (
    <Flex>
      <Flex></Flex>
    </Flex>
  );
}
