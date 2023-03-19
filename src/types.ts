export type Franchise = {
    id: string;
    title: string;
    backdrop: string;
    movies: { title: string; poster: string; description: string; }[];
    [key: string]: string | { title: string; poster: string; description: string; }[] | undefined;
  }