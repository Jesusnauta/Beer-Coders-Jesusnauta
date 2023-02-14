import { BeerStructure } from '../models/beer';

export class BeerApiRepo {
  url: string;

  constructor() {
    this.url = 'https://api.punkapi.com/v2/beers';
  }

  async loadBeers(): Promise<BeerStructure[]> {
    const defaultPage = '?page=';
    const beersPerPage = '&per_page=20';

    const pageNumber = '1';
    const url = this.url + defaultPage + pageNumber + beersPerPage;

    const resp = await fetch(url);
    const data = (await resp.json()) as BeerStructure[];
    console.log(data);
    return data;
  }

  async getBeer(id: BeerStructure['id']): Promise<BeerStructure> {
    const url = this.url + '/' + id;
    const resp = await fetch(url);
    const data = (await resp.json()) as BeerStructure;
    console.log(data);
    return data;
  }
}
