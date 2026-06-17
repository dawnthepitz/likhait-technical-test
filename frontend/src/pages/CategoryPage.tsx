import React, { useState, useEffect } from "react";
import { fetchCategories } from "../services/api";
import { Modal, Button } from "../vibes";
import { COLORS } from "../constants/colors";
import { CategoriesTable } from "../components/CategoriesTable";
import { Category } from "../types";

const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCategoriesData = async () => {
    try {
      setLoading(true);
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  // const handleAddExpense = async (data: ExpenseFormData) => {
  //   try {
  //     await createExpense(data);
  //     setIsModalOpen(false);
  //   } catch (error) {
  //     console.error("Error creating expense:", error);
  //     throw error;
  //   }
  // };

  const pageStyle: React.CSSProperties = {
    padding: "48px 64px",
    minHeight: "100vh",
    background: COLORS.secondary.s01,
  };

  const headerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    justifyContent: "space-between",
  };

  const leftHeaderStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "40px",
    fontWeight: 700,
    color: COLORS.secondary.s10,
    margin: 0,
    flexShrink: 0,
  };

  const loadingStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "48px",
    fontSize: "18px",
    color: COLORS.secondary.s08,
  };

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <div style={leftHeaderStyle}>
          <h1 style={titleStyle}>Expense Category</h1>
        </div>
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Add Category
        </Button>
      </div>

      <div>
        {loading ? (
          <div style={loadingStyle}>Loading...</div>
        ) : (
          <>
            <div style={{ marginTop: "32px" }}>
              <CategoriesTable categories={categories} />
            </div>
          </>
        )}
      </div>

      {/* <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Expense"
      >
        <ExpenseForm
          onSubmit={handleAddExpense}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal> */}
    </div>
  );
};

export default CategoryPage;
