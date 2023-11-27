export function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start by adding some items to your packing list!</em>
      </p>
    );
  }

  console.log(items);
  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  if (numPackedItems === 0) {
    return (
      <p className="stats">
        <em>
          💼 You have {numItems} items on your list. Click the checkbox to mark
          them as packed!
        </em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You are all packed! Ready to go ✈`
          : `💼 You have ${numItems} items on your list, and you have already packed
        ${numPackedItems > 0 ? percentage : 0}%
      `}
      </em>
    </footer>
  );
}
