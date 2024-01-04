import { fetchMovies } from "../lib/data";
import Link from "next/link";

async function Page({ params }: { params: { todoID: string } }) {

  const data = await fetchMovies();

  return (
    <Link href={`/`} className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-[10px] min-w-[300px] max-w-[300px] p-[10px] m-auto mb-[20px] bg-white shadow-md rounded-[5px]`}>
        <h1 className="font-semibold text-[#434343]">{data[params.todoID]?.title}</h1>
        <h2 className={`${data[params.todoID]?.completed ? "bg-emerald-300" : "bg-red-300"}
        w-fit py-[5px] px-[10px] rounded-[25px]`}>{data[params.todoID]?.completed === true ? "Completed ✅" : "Pending ⏳"}</h2>
      </Link>
  )
}

export default Page;
