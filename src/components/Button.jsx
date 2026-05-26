export default function Button({ text }) {
  return (
    <button className="text-white uppercase text-2xl border-primary border p-4 pt-5 leading-none">
      {text}
    </button>
  );
}
