import React from 'react';
import classnames from 'classnames';

import { beerListFilterParam, beerListSearchParam } from '../beer-list.constants';
import { useBeerListSearchParams } from '../hooks/use-beer-list-search-params';

function BeerListNav() {
  const { isMyBeersSelected, setSearchParams } = useBeerListSearchParams();

  const onAllBeersClicked = () => setSearchParams({ [beerListSearchParam.filter]: beerListFilterParam.allBeers });
  const myBeersClicked = () => setSearchParams({ [beerListSearchParam.filter]: beerListFilterParam.myBeers });

  return (
    <nav className="flex gap-4 ml-4">
      <NavItem title="All Beers" handleClick={onAllBeersClicked} isSelected={!isMyBeersSelected} />
      <NavItem title="My Beers" handleClick={myBeersClicked} isSelected={isMyBeersSelected} />
    </nav>
  );
}

interface INavItemProps {
  title: string;
  handleClick: () => void;
  isSelected: boolean;
}

const NavItem = (props: INavItemProps) => {
  const { title, handleClick, isSelected } = props;

  const navItemClass = classnames('text-lg font-semibold', { 'text-gray': !isSelected });

  return (
    <h2 className={navItemClass}>
      <button onClick={handleClick}>{title}</button>
    </h2>
  );
};

export default BeerListNav;
