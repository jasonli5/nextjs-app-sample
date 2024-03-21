import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col gap-3 h-screen w-screen justify-center items-center">
      <div className="font-bold text-2xl">Dog</div>
      <img
        src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Picture of a dog"
        className="w-[500px] h-[300px]"
      />
      <Link href="/" className="underline text-blue-500">
        Go back
      </Link>
    </main>
  );
}
