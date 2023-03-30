import React from 'react';

import LoadingIndicator from './loading-indicator';

interface ILoadMoreProps {
  handleLoadMore: () => void;
  isLoading?: boolean;
}

function LoadMore(props: ILoadMoreProps) {
  const { handleLoadMore, isLoading } = props;

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <p className="flex justify-center text-sm text-primary font-semibold cursor-pointer" onClick={handleLoadMore}>
      Load More
      <LoadMoreIndicator />
    </p>
  );
}

function LoadMoreIndicator() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className="fill-primary self-center ml-2"
      data-supported-dps="16x16"
      fill="none"
      width="8"
      height="8"
      focusable="false"
    >
      <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
    </svg>
  );
}

export default LoadMore;
