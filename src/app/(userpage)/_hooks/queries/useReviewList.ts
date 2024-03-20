import { useQuery } from "@tanstack/react-query";

import { reviewList } from "../../_api/mypage";

const useReviewList = (userId: number) => {
  return useQuery({
    queryKey: ["reviewList", userId],
    queryFn: () => reviewList(userId)
  });
};

export default useReviewList;