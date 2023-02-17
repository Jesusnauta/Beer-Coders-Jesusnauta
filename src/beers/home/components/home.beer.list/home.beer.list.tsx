import { useContext, useEffect } from 'react';
import { BeersContext } from '../../../context/beers.context';
import { BeerStructure } from '../../../models/beer';
import { MainCard } from '../main.card/main.card';
import './home.beer.list.scss';

export function HomeBeerList() {
  const { beerList, loadBeers } = useContext(BeersContext);

  useEffect(() => {
    loadBeers();
  }, [loadBeers]);

  return (
    <>
      <div className="home-page-list-filter">FILTRO</div>
      <div className="home-page-list-cards">
        <ul>
          {beerList.map((item: BeerStructure) => (
            <MainCard key={item.id} beer={item}></MainCard>
          ))}
        </ul>
      </div>
      <div className="home-page-list-next-prev-button">
        <img src="img/previous-button.png" alt="Previous button" />
        <img src="img/next-button.png" alt="Next button" />
      </div>
    </>
  );
}
