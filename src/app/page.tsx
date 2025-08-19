import { auth } from "@/auth";

import Image from "next/image";
import Chat from "@/app/components/Chat";
import { Separator } from "@/components/ui/separator";

export default async function Home() {
  const session = await auth();

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Welcome To GPT Chat</h1>
      {!session?.user?.name ? (
        <div>You need to login to use this chat.</div>
      ) : (
        <>
          <Separator className="my-5" />
          <Chat />
        </>
      )}
    </main>
  );
}
