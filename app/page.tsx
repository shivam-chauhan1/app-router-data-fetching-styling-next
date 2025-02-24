import Link from "next/link";
import homeStyles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className={`${homeStyles.heading} text-3xl font-bold mb-6`}>
        Next.js App Router Examples
      </h1>
      <ul className="space-y-4">
        <li>
          <Link
            href="/client"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Client-side Fetching (SWR)
          </Link>
        </li>
        <li>
          <Link
            href="/server/1"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Server Component
          </Link>
        </li>
        <li>
          <Link
            href="/isr/1"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ISR with generateStaticParams
          </Link>
        </li>
      </ul>
    </div>
  );
}
