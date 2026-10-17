import React, {Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default function DisplayLottie({animationData}) {
  if (!animationData) {
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{width: "100%", height: "100%"}}
      />
    </Suspense>
  );
}
