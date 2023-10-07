import React, { ChangeEvent } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import {
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const TableHeader = ({ headers }) => (
    <Thead>
      <Tr>
        {headers?.map((header) => (
          <Th key={header.id}>{header.label}</Th>
        ))}
        <Th></Th>
      </Tr>
    </Thead>
  );
  export default TableHeader;
  