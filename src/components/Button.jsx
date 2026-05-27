import { Link } from "react-router-dom";

export default function Button({ text }) {
  return (
    <Link to="/sign-up">
      <button className="text-white uppercase text-2xl border-white/30 border p-4 pt-5 leading-none relative mt-6 cursor-none">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 size-8 plus" />
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 size-8 plus" />
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 size-8 plus" />
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 size-8 plus" />

        {text}
      </button>
    </Link>
  );
}
