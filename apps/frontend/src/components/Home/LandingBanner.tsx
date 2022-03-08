import Image from "next/image";

const LandingBanner = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="basis-2/5 pt-10 flex flex-col">
        <p className="text-5xl font-bold">HELLO,</p>
        <p className="whitespace-pre-wrap font-semibold text-4xl text-black/[.6]">
          {"Welcome to,\nRubem's Blog"}{" "}
        </p>
      </div>
      <div className="basis-3/5 relative">
        <Image
          src={"/images/landing_page.webp"}
          objectFit="cover"
          layout="responsive"
          height={598}
          width={745}
        />
      </div>
    </div>
  );
};

export default LandingBanner;
