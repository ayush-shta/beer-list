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
    </p>
  );
}

export default LoadMore;
