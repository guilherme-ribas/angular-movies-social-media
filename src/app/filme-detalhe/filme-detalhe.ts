export class FilmeDetalhe {
  id: number;
  popularity: number;
  genres = new Array<Genres>();
  overview: string;
  poster_path: string;
  backdrop_path: string;
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

export class MovieVideos {
  id: number;
  results = new Array<VideoResults>();
}

class VideoResults {
  id: number;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}
