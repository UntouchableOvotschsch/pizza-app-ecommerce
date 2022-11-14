import React from "react";
import ContentLoader from "react-content-loader"

const PizzaBlockSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={500}
      className='pizza-block'
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="137" r="137" />
      <rect x="0" y="298" rx="10" ry="10" width="280" height="24" />
      <rect x="0" y="344" rx="10" ry="10" width="280" height="88" />
      <rect x="-1" y="454" rx="10" ry="10" width="95" height="30" />
      <rect x="122" y="447" rx="25" ry="25" width="152" height="45" />
    </ContentLoader>
  )
}

export default PizzaBlockSkeleton