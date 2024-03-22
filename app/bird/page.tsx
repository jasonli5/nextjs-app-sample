import Link from "next/link";
import bird_pic from "@/public/bird.jpeg";

export default function Page() {
  return (
    <main className="flex flex-col gap-3 h-screen w-screen justify-center items-center">
      <div className="font-bold text-2xl">Bird</div>
      <img
        src={bird_pic.src}
        alt="Picture of a bird"
        className="w-[500px] h-[300px]"
      />
      <Link href="/hamster" className="underline text-blue-500">
        Go back
      </Link>
      <Link href="/" className="underline text-blue-500">
        Go home
      </Link>
    </main>
  );
}
