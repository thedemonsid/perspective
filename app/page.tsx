import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center p-2 m-2">
      <Link href="/courses">Courses</Link>
    </div>
  );
}
