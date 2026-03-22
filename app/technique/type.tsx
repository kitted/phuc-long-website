export interface TechniqueType {
  id: number;
  title: string;
  time: string;
  writer: string;
  views: number;
  tag: string[];
  type: string | string[];
  origin: string;
  banner: {
    image: string;
    title: string;
    description: string[];
  };
  content: Array<{
    title?: string;
    text?: string;
    image?: {
      img: string;
      title: string;
    };
    images?: Array<{
      src: string;
      caption?: string;
    }>;
    video?: string;
    videoCaption?: string;
    caption?: string;
  }>;
}
