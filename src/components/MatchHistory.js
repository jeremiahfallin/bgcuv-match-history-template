import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from "@chakra-ui/react";

import { createDate } from "../utils";

export default function MatchHistory({ data }) {
  return (
    <TableContainer>
      <Table>
        <TableCaption>
          BGCUV Super Smash Bros Ultimate match history
        </TableCaption>
      </Table>
    </TableContainer>
  );
}
