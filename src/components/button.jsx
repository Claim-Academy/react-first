// Lifting State Up
export default function Button({
  text,

  // 'onClick' is a callback function that is called back on click
  onClick,
}) {
  return (
    <button
      type="button"
      className="rounded bg-green-500 px-2 py-4 text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
