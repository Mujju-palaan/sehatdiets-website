import FlipperCard from "../../../components/AllOtherCards/FlipperCard/FlipperCard";
import MotionCard from "../../../components/AllOtherCards/MotionCard/MotionCard";
import PricingCard from "../../../components/PricingCard/PricingCard";
import ProductCard from "../../../components/AllOtherCards/ProductCard/ProductCard";
import ProfileCard from "../../../components/AllOtherCards/ProfileCard/ProfileCard";
import ReviewCard from "../../../components/AllOtherCards/ReviewCard/ReviewCard";

const Cards = () => {
  return (
    <>
      <h1>All Cards are redirected her</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <FlipperCard />
        <ProductCard />
        <ReviewCard />
        <PricingCard />
        <PricingCard />
        <PricingCard />
        <MotionCard />
        <ProfileCard />
      </div>
    </>
  );
};

export default Cards;
