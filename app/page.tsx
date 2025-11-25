'use client';
import WrapApp from "@/src/components/layout/wrapApp";
import NavbarApp from "@/src/components/elements/navbar/navbarApp";

export default function Home() {
  return (
    <div className="flex flex-col w-full ">
      <NavbarApp />
      <WrapApp>
        <h1 className="text-3xl">Home Apps</h1>
      </WrapApp>
    </div>
  );
}
