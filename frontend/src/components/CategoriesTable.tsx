/**
 * Calendar expense table component
 */

import React from "react";
import { Category } from "../types";
import { COLORS } from "../constants/colors";

interface CategoriesTableProps {
  categories: Category[];
}

export function CategoriesTable({
  categories,
}: CategoriesTableProps) {


  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: COLORS.background.main,
    borderRadius: "0.5rem",
    overflow: "hidden",
    border: `1px solid ${COLORS.border}`,
  };

  const theadStyle: React.CSSProperties = {
    backgroundColor: COLORS.background.card,
  };

  const thStyle: React.CSSProperties = {
    padding: "0.75rem",
    textAlign: "left",
    fontWeight: 600,
    color: COLORS.text.primary,
    borderBottom: `2px solid ${COLORS.border}`,
  };

  const tdStyle: React.CSSProperties = {
    padding: "0.75rem",
    borderBottom: `1px solid ${COLORS.border}`,
    color: COLORS.text.primary,
  };

  const emptyStyle: React.CSSProperties = {
    padding: "2rem",
    textAlign: "center",
    color: COLORS.text.secondary,
  };


  if (categories.length === 0) {
    return (
      <div style={tableStyle}>
        <div style={emptyStyle}>
          No categories found. Add your first category to get started!
        </div>
      </div>
    );
  }

  return (
    <>
      <table style={tableStyle}>
        <thead style={theadStyle}>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td style={tdStyle}>{category.id}</td>
              <td style={tdStyle}>{category.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
