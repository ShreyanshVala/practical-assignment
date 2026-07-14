import { useCallback, useMemo, useState } from "react";

function LargeList() {
  const [count, setCount] = useState(0);

  const items = useMemo(() => {
    console.log("Generating List...");

    return Array.from({ length: 1000 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
    }));
  }, []);

  const handleClick = useCallback(() => {
    alert("Item Clicked");
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>

      {items.map((item) => (
        <div key={item.id} onClick={handleClick}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default LargeList;
