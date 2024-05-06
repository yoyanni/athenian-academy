// index.tsx
export interface CarouselType {
  type: string;
}

// Card.tsx
export interface CardType {
  title: string;
  type: string;
  edition?: 0 | 1;
}
