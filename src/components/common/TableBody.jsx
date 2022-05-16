import React from "react";

function TableBody({ items, columns }) {
  const renderContent = (entry, column) => {
    if (column.content) {
      return column.content(entry);
    }
    return entry[column.label];
  };
  return (
    <tbody>
      {items.map((entry) => (
        <tr key={entry.id}>
          {columns.map((column) => (
            <td key={column.id}>{renderContent(entry, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
