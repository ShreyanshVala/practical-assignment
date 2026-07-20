export default function Filter({ filter, setFilter }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter By Cuisine"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}
