import React, { memo, useRef } from "react";

type RenderPageProps = {
  page?: string;
  color?: string;
};

const RenderCount: React.FC<RenderPageProps> = ({ page, color }) => {
  const savedRenderCount = useRef(0);

  return (
    <p
      className={`${
        color ? color : "bg-gray-200"
      } rounded-full absolute top-0 right-0 w-7 h-7 grid place-items-center m-10`}
    >
      {++savedRenderCount.current}
      <span>{page}</span>
    </p>
  );
};

export default RenderCount;
// export default memo(RenderCount);
