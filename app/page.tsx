import LoginButton from "@/components/auth/login-button";
import { poppins } from "@/components/font";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex justify-center items-center flex-col h-full
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800"
    >
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl text-white drop-shadow-md", poppins.className)}>🔏Auth</h1>
        <p className="text-lg text-white">A simple authentication service.</p>

        <LoginButton >
          <Button variant={"secondary"} size={"lg"} >
            Login
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
