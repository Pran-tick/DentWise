import { Button } from "@/components/ui/button";
import {
  SignUpButton,
  SignedOut,
  SignOutButton,
  SignedIn,
} from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>home page</h1>
      <SignedOut>
        <SignUpButton mode="modal">sign up</SignUpButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>Logout</SignOutButton>
      </SignedIn>
    </div>
  );
}
