import BannerSpin from "./cards/BannerSpin";
import ProfileCard from "./cards/ProfileCard";

export default function Overlay() : JSX.Element {
  return (
    <div className="absolute top-0 left-0 z-40 w-full h-full flex justify-center items-center">
      <div className="max-w-screen-lg flex w-full col-10 flex-col lg:flex-row space-x-20">
        <BannerSpin className="basis-7/12" />
        <ProfileCard/>
      </div>
    </div>
  );
}