import Image from "next/image";
import Link from "next/link";

export default function Loading() {
  const arr = Array.from({ length: 8 });
  return (
    <section className="flex flex-col container mt-16 mb-16">
      <h1 className="text-5xl text-center font-bold text-gray-800"></h1>
      <Link className="flex items-center py-2 mt-12" href="/">
        <Image 
          width={24} 
          height={24}
          src="/arrow-back.svg" 
          alt="Seta de voltar"
        />
        Voltar
      </Link>
      <article 
        className="flex md:flex-row flex-col justify-between min-w-full p-10 
        bg-white rounded-xl"
      >
        <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
          <div className="w-full">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
          </div>
        </div>
        <div role="status" className="flex items-center justify-center w-full h-48 bg-gray-300 sm:w-96 rounded-lg animate-pulse dark:bg-gray-700">
          <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
          </svg>
            <span className="sr-only">Loading...
          </span>
        </div>
      </article>
    </section>
  );
}