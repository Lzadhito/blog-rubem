import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import(/* webpackChunkName: "LandingBanner" */ "./view")
);

export default DynamicComponent;
