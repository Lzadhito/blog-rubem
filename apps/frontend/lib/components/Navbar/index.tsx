import dynamic from "next/dynamic";

const DynamicComponent = dynamic(
  () => import(/* webpackChunkName: "Navbar" */ "./view")
);

export default DynamicComponent;
