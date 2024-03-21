export default function Home() {
  return (
    <main className="flex flex-col gap-3 h-screen w-screen justify-center items-center">
      <div className="font-bold text-2xl">Welcome to my Next.js sample!</div>
      <img
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Picture of a cat"
        className="w-[500px] h-[300px]"
      />
    </main>
  );
}
