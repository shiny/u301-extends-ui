import { Icon } from "@/components/ui/icon";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image className="rounded-xl" alt="U301 Extends UI Logo" width={100} height={100} src={'/logo.png'} />
        <h1 className="text-6xl font-bold text-center sm:text-left">
          U301 Extends UI
        </h1>
        <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            No need to install, if you already have shadcn installed.
          </li>
          <li className="mb-2">
            add components by run `shadcn add` command.
          </li>
          <li>For example, to add a Icon component, run `shadcn add https://ui.tealight.uk/r/icon`.</li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/shiny/u301-extends-ui/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="codicon:github-inverted" className="w-6 h-6" />
            Github 
          </Link>
        </div>
        <div className=" font-[family-name:var(--font-geist-mono)]">
          Open source project by Tealight Ltd.
        </div>
      </main>
    </div>
  );
}
