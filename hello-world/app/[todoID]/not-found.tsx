import Link from "next/link";

function PageNotFound() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[20px]">
      <h1 className="text-[24px] text-center min-w-[360px]">Sorry, no unicorns in here... 🦄</h1>
      <Link href={"/"} className="text-white bg-[#1877f2] p-[5px] px-[10px] rounded-[2.5px] hover:scale-[105%] active:scale-[95%] transition-all duration-[.125s]">Back to todos page! ⬅</Link>
    </div>
  );
}

export default PageNotFound;