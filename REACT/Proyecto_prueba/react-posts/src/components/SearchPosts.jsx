import React from "react";

const SearchPosts = ({ valor, onChange }) => {
  return (
    <div style={{ margin: "20px 0", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Buscar por título..."
        value={valor}
        onChange={onChange}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default SearchPosts;
