import { lazy } from "react";

const ReturnToTopButtonLazy = lazy(() => import("./ReturnToTopButton"));

export const ReturnToTopButtonAsync = (props: ReturnToTopButtonProps) => {
  return (
    <Suspense fallback={<Skeleton width={"100%"} height={140} />}>
      <ReturnToTopButtonLazy {...props} />
    </Suspense>
  );
};
