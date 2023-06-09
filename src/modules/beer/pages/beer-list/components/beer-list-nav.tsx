import React from 'react';
import classnames from 'classnames';

import AddNewBeerButton from './add-new-beer-button';
import { useBeerListSearchParams } from '../hooks/use-beer-list-search-params';
import { beerListFilterParam, beerListSearchParam } from '../beer-list.constants';

function BeerListNav() {
  const { isMyBeersSelected, setSearchParams } = useBeerListSearchParams();

  const onAllBeersClicked = () => setSearchParams({ [beerListSearchParam.filter]: beerListFilterParam.allBeers });
  const myBeersClicked = () => setSearchParams({ [beerListSearchParam.filter]: beerListFilterParam.myBeers });

  return (
    <nav className="flex mb-4 items-center justify-between">
      <div className="flex gap-4">
        <NavItem title="All Beers" handleClick={onAllBeersClicked} isSelected={!isMyBeersSelected} />
        <NavItem title="My Beers" handleClick={myBeersClicked} isSelected={isMyBeersSelected} />
      </div>
      {isMyBeersSelected && <AddNewBeerButton />}
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
