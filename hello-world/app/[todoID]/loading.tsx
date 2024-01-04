import { secondaryFont } from "../ui/fonts";

function Loading() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[20px]">
      <h1 className={secondaryFont.className + " text-[#636363] text-[18px] text-center min-w-[360px]"}>An 🦄 is coming from sky! 🌈</h1>
    </div>
  );
}

export default Loading;