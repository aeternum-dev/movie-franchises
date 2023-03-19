type Movie = {
    title: string;
    poster: string;
    description: string;
  };
  
 type MovieList = Array<Movie>;
  
 type Franchise = {
    title: string;
    backdrop: string;
    movies: MovieList;
  };
  
 export type FranchiseList = {
    [key: string]: Franchise;
  };