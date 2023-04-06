interface DedCardProps {
  id: number;
  heading: string;
  description: string;
}

interface OurProductProps {
  imgSrc: string;
  id: number;
  summary: string;
  description: string;
  productUrl: string;
}

interface DescriptionProps {
  imgSrc: string;
  description: string;
  degree: number;
}

interface QualityCProps {
  imgSrc: string;
  heading: string;
  description: string;
  triangles: TriangleProps[];
  id: number;
  delay: number;
}

interface TrendingProps {
  imgSrc: string;
  name: string;
  size: number;
  price: number;
  category: string;
}

interface TriangleProps {
  position: {
    left?: number;
    bottom?: number;
    top?: number;
    right?: number;
    floatOr?: string;
  };
  id: number;
  rotation: string;
  delay?: number;
}

interface CartItem {
  id: number;
  imgSrc: string;
  name: string;
  description: string;
  size: number;
  price: number;
  quantity: number;
}

interface SummaryProps {
  label: string;
  value: number;
}

interface FTextField {
  label: string;
  variant?: "standard" | "filled" | "outlined" | undefined;
  type?: string;
}

interface CursorProps {
  pageOver?: string;
}

interface IncrementorProps {
  customStyles?: {
    container: string;
  };
}

interface Link1 {
  to: string;
  end: boolean;
  displayName: string;
}

interface NextButtonProps {
  swipingButtonRef: any;
}

interface PrevButtonProps {
  swipingButtonRefPrev: any;
}

interface SocialProps {
  name: string;
  link: string;
  icon: any;
  section?: string;
}

interface SocialsProps {
  section?: string;
}

interface PageProps {
  page?: string;
}

interface Link {
  link: string;
  to: string;
}

interface AccordionProps {
  summary: string;
  links: Link[];
  isActive: boolean;
  handleChange: (summary: string) => any;
}

interface BestSeller {
  rating: number;
  improvement: string;
  description: string;
  price: number;
}

interface BrandProps {
  id: number;
  imgSrc: string;
  from?: string;
}

interface CollectionProps {
  collectionName: string;
  nbrOfProducts: number;
  collectionPath: string;
  indexId: number;
  imgSource: string;
}

interface FeaturedProInterface {
  rating: number;
  description: string;
  price: Number;
  imgSource: string;
  id: string;
  indexId: number;
  from?: string;
}

interface color {
  firstColor: string;
  secondColor: string;
}

interface CategoryProductProps {
  id: number;
  imgSrc: string;
  discount?: number;
  sneakersName: string;
  sneakersType: string;
  price: number;
}

interface CollectionProps1 {
  id: number;
  imgSrc: string;
  categoryName: string;
  productsNbr: number;
}

interface SizeProps {
  isAvailable: boolean;
  isActive: boolean;
  size: number;
  toggleIsActive: (size: number) => any;
}

interface TheLookProps {
  name: string;
  imgSrc: string;
  type: string;
  price: number;
  id: number;
}

interface YouMayLikeProps {
  name: string;
  imgSrc: string;
  company: string;
  price: number;
  id: number;
}

interface CategoryProps {
  url: string;
  img: string;
  name: string;
  id: number;
}

interface DesignerTalkProps {
  talk: string;
  name: string;
  role: string;
}

interface DiffProps {
  heading: string;
  content: string;
  imgUrl: string;
}

interface AccordionProps1 {
  question: string;
  answer: string;
  expanded: boolean;
  panel: string;
  handleChange: (question: string) => any;
  page?: string;
}

interface PromoProductProps {
  sneakerName: string;
  madeOf: string;
  durabilityType: string;
  imgSrc: string;
  userImage: string;
  rating: number;
  userTestimonial: string;
  id: number;
}

interface TasteProps {
  imgUrl: string;
  heading: string;
  content: string;
  id: number;
}

interface CustomerTestProps {
  customerName: string;
  rating: number;
  testimonial: string;
}

interface TrackerCard {
  id: number;
  measurement: string;
  imgSrc: string;
}
