export type NewsType = {
  id: number;
  title: string;
  time: string;
  writer: string;
  views: number;
  tag: string[];
  type: string[];
  origin: string;
  banner: {
    image: string;
    title: string;
    description: string[];
  };
  content: (
    | { title: string }
    | { text: string }
    | { image: { img: string; title: string } }
  )[];
};
