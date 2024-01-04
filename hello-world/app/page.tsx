import { fetchMovies } from "@/app/lib/data"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const todos = await fetchMovies();

  return (
    <main className="py-[15px]">
      <h1 className="w-fit m-auto mb-[15px] text-[24px] font-bold">Hello World!</h1>
      {todos.map((elem: any, i: number) => (
        <Link href={`/${i}`} key={"todo-" + i} className={`flex flex-col gap-[10px] max-w-[300px] p-[10px] m-auto mb-[20px] bg-white shadow-md rounded-[5px]`}>
        <h1 className="font-semibold text-[#434343]">{elem.title}</h1>
        <h2 className={`${elem.completed ? "bg-emerald-300" : "bg-red-300"}
        w-fit py-[5px] px-[10px] rounded-[25px]`}>{elem.completed === true ? "Completed ✅" : "Pending ⏳"}</h2>
      </Link>
      ))}
    </main>
  )
}
