import Link from "next/link";
import Image from "next/image";
import hamster_pic from "@/public/hamster-med.jpeg";

export default function Page() {
  return (
    <main className="flex flex-col gap-3 h-screen w-screen justify-center items-center">
      <div className="font-bold text-2xl">Hamster</div>
      <Image
        src={hamster_pic}
        alt="Picture of a hamster"
        width={500}
        height={300}
      />
      <Link href="/dog" className="underline text-blue-500">
        Go back
      </Link>
      <Link href="/bird" className="underline text-blue-500">
        Go bird
      </Link>
      <Link href="/" className="underline text-blue-500">
        Go home
      </Link>
    </main>
  );
}
