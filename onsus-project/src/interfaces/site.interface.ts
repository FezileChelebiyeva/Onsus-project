export interface Product {
  id: number;
  image: string;
  title: string;
  info: string;
  price: string;
  discount_price: string | null;
  brand: string;
  model: string;
  screen_size?: string | null;
  resolution?: string | null;
  refresh_rate?: string | null;
  system?: string | null;
  memory?: string | null;
  color?: string | null;
  delivery_time?: number | null;
}
