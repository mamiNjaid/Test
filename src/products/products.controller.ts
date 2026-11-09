import { Controller } from '@nestjs/common';

@Controller('products')
export class ProductsController {


getAllProducts() {
  return [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 }
  ];


}
}
