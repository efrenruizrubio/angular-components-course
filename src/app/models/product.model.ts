export interface Product {
  id: string;
  title: string;
  /* 
  Because the FakeStoreAPI server went down, changed to https://fakeapi.platzi.com/, the image is inside an array of images.  */
  image: string;
  /* images: string[]; */
  tag: string;
  price: number;
  description: string;
  category: string;
  quantityLeft: number;
}
