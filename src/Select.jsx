export default function Select({ selectedYear, handleYearChange }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <select
        value={selectedYear}
        onChange={handleYearChange}
        style={{
          padding: "10px",
          fontSize: "16px",
          border: "2px solid #333",
          borderRadius: "4px",
          width: "300px",
          margin: "10px 0",
          outline: "none",
        }}
      >
        <option value="" disabled>
          Select a year
        </option>
        {/* Generate an array of years */}
        {Array.from({ length: 10 }, (_, i) => (2020 + i).toString()).map(
          (year) => (
            <option key={year} value={year}>
              {year}
            </option>
          )
        )}
      </select>
    </div>
  );
}
