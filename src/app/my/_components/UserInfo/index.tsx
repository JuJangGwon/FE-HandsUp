import { CheckLoginUserResponse } from "@/utils/types/user/users";

import useUserInfo from "../../_hooks/queries/useUserInfo";
import BoxLayout from "../BoxLayout";
import Profile from "../Profile";
import ReviewItem from "../ReviewItem";
import TransactionStatus from "../TransactionStatus";

function UserInfo({ user }: { user: CheckLoginUserResponse }) {
  const {
    purchaseStatusCounts,
    saleStatusCounts,
    reviewLabels: reviewLabelList,
    reviews: reviewList
  } = useUserInfo(user.userId);

  return (
    <>
      <Profile user={user} />
      <BoxLayout
        title="구매 내역"
        url="buying?status=bidding">
        <TransactionStatus
          type="구매"
          statusCounts={purchaseStatusCounts}
        />
      </BoxLayout>
      <BoxLayout
        title="판매 내역"
        url="selling?status=bidding">
        <TransactionStatus
          type="판매"
          statusCounts={saleStatusCounts}
        />
      </BoxLayout>
      <BoxLayout title="이런 점이 좋았어요">
        <div className="my-2 flex flex-wrap gap-2">
          {reviewLabelList &&
            reviewLabelList.map(({ label, count }, index) =>
              count > 0 ? (
                <span
                  key={index}
                  className="rounded-3xl px-2 border border-[#96E4FF] ">
                  {label} {count}
                </span>
              ) : null
            )}
        </div>
      </BoxLayout>
      <BoxLayout
        title={
          <div className="flex gap-2">
            <p>상세한후기도 있어요</p>
            <p className="text-[#96E4FF]">{reviewList?.length}</p>
          </div>
        }
        url="review">
        <div className="my-2 flex flex-col gap-2">
          {reviewList &&
            reviewList.slice(0, 3).map((review) => (
              <ReviewItem
                key={review.reviewId}
                review={review}
              />
            ))}
        </div>
      </BoxLayout>
    </>
  );
}

export default UserInfo;