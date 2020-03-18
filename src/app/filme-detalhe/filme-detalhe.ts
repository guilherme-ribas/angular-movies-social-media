export class FilmeDetalhe {
  id: number;
  popularity: number;
  genres = new Array<Genres>();
  overview: string;
  release_date: string;
  production_companies = new Array<ProductionCompanies>();
  production_countries = new Array<ProductionCountries>();
}

class Genres {
  id: number;
  name: string;
}

class ProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

class ProductionCountries {
  iso_3166_1: string;
  name: string;
}
