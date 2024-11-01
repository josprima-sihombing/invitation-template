"use client";

import { Table } from "@mantine/core";
import dayjs from "dayjs";
import { useMemo } from "react";

type RSVPTableProps = {
  data: any[];
};

export default function RSVPTable({ data }: RSVPTableProps) {
  const rows = useMemo(
    () =>
      data.map((row) => (
        <Table.Tr key={row.id}>
          <Table.Td width={200}>{row.name}</Table.Td>
          <Table.Td width={160}>
            {row.attend ? "Hadir" : "Tidak Hadir"}
          </Table.Td>
          <Table.Td width={160}>{row.phone_number}</Table.Td>
          <Table.Td miw={160}>{row.message}</Table.Td>
          <Table.Td width={160}>
            {dayjs(row.created_at).format("DD MMM HH:mm")}
          </Table.Td>
        </Table.Tr>
      )),
    [data],
  );

  const attend = useMemo(() => {
    return data.reduce((accumulator, currentItem) => {
      if (currentItem.attend) {
        return accumulator + 1;
      }

      return accumulator;
    }, 0);
  }, [data]);

  const notAttend = useMemo(() => {
    return data.reduce((accumulator, currentItem) => {
      if (!currentItem.attend) {
        return accumulator + 1;
      }

      return accumulator;
    }, 0);
  }, [data]);

  return (
    <div>
      <div className="flex gap-4">
        <div className="text-center border rounded-md px-4 py-2 min-w-[80px]">
          <h2 className="text-xs">Total</h2>
          <p className="font-bold">{rows.length}</p>
        </div>

        <div className="text-center border rounded-md px-4 py-2 min-w-[80px]">
          <h2 className="text-xs">Hadir</h2>
          <p className="font-bold">{attend}</p>
        </div>

        <div className="text-center border rounded-md px-4 py-2 min-w-[80px]">
          <h2 className="text-xs">Tidak Hadir</h2>
          <p className="font-bold">{notAttend}</p>
        </div>
      </div>

      <Table.ScrollContainer minWidth={720}>
        <Table striped highlightOnHover verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Nama</Table.Th>
              <Table.Th>Hadir/Tidak Hadir</Table.Th>
              <Table.Th>Nomor Telp</Table.Th>
              <Table.Th>Wish</Table.Th>
              <Table.Th>Date</Table.Th>
            </Table.Tr>
          </Table.Thead>

          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </div>
  );
}
