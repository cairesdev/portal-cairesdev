import { redirect } from "next/navigation";

export default function Home() {
  redirect("/linktree");
  return (
    <div>
      <h1>Cairesdev</h1>
    </div>
  );
}
