import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row md:px-40 md:pt-32">
      <div className="basis-2/5 pt-10 flex flex-col">
        <p className="text-5xl font-bold">HELLO,</p>
        <p className="whitespace-pre-wrap font-semibold text-4xl text-black/[.6]">
          {"Welcome to,\nRubem's Blog"}{" "}
        </p>
      </div>
      <div className="basis-3/5 relative">
        <Image
          src={"/images/landing_page.png"}
          objectFit="cover"
          layout="responsive"
          height={598}
          width={745}
        />
      </div>
    </div>
  );
}
