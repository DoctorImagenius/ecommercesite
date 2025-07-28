
import { Product } from '../components/CartProvider';

export const products: Product[] = [
  {
    id: '1',
    name: 'Silk Evening Gown',
    price: 299.99,
    image: 'https://readdy.ai/api/search-image?query=elegant%20silk%20evening%20gown%20in%20deep%20burgundy%20color%2C%20luxury%20fashion%20photography%2C%20clean%20white%20background%2C%20professional%20modeling%20shot%2C%20high-end%20fashion%20styling%2C%20sophisticated%20draping%2C%20formal%20wear%2C%20premium%20quality%20fabric%20texture&width=400&height=600&seq=1&orientation=portrait',
    description: 'Luxurious silk evening gown with intricate beadwork and flowing silhouette. Perfect for formal occasions and special events.',
    category: 'Evening Wear',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Burgundy', 'Navy', 'Emerald', 'Black']
  },
  {
    id: '2',
    name: 'Designer Blazer',
    price: 189.99,
    image: 'https://readdy.ai/api/search-image?query=professional%20womens%20blazer%20in%20cream%20color%2C%20modern%20tailoring%2C%20business%20fashion%20photography%2C%20clean%20background%2C%20sophisticated%20styling%2C%20premium%20fabric%2C%20contemporary%20design%2C%20office%20wear%20elegance&width=400&height=600&seq=2&orientation=portrait',
    description: 'Contemporary blazer with modern tailoring and premium fabric. Essential piece for professional wardrobe.',
    category: 'Workwear',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Cream', 'Black', 'Navy', 'Charcoal']
  },
  {
    id: '3',
    name: 'Cocktail Dress',
    price: 159.99,
    image: 'https://readdy.ai/api/search-image?query=elegant%20cocktail%20dress%20in%20emerald%20green%2C%20mid-length%20party%20dress%2C%20luxury%20fashion%20photography%2C%20clean%20background%2C%20sophisticated%20styling%2C%20premium%20fabric%2C%20evening%20wear%2C%20glamorous%20design&width=400&height=600&seq=3&orientation=portrait',
    description: 'Chic cocktail dress with elegant cut and luxurious fabric. Perfect for evening parties and social events.',
    category: 'Party Wear',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Emerald', 'Rose Gold', 'Midnight Blue', 'Champagne']
  },
  {
    id: '4',
    name: 'Cashmere Sweater',
    price: 129.99,
    image: 'https://readdy.ai/api/search-image?query=luxury%20cashmere%20sweater%20in%20soft%20pink%20color%2C%20cozy%20knitwear%2C%20premium%20fashion%20photography%2C%20clean%20background%2C%20elegant%20styling%2C%20high-quality%20fabric%20texture%2C%20comfortable%20fit%2C%20sophisticated%20design&width=400&height=600&seq=4&orientation=portrait',
    description: 'Pure cashmere sweater with soft texture and timeless design. Ultimate comfort meets luxury.',
    category: 'Knitwear',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Soft Pink', 'Ivory', 'Camel', 'Lavender']
  },
  {
    id: '5',
    name: 'Luxury Handbag',
    price: 459.99,
    image: 'https://readdy.ai/api/search-image?query=luxury%20leather%20handbag%20in%20cognac%20brown%20color%2C%20premium%20accessories%20photography%2C%20clean%20white%20background%2C%20sophisticated%20styling%2C%20high-end%20fashion%2C%20elegant%20design%2C%20quality%20craftsmanship%2C%20designer%20bag&width=400&height=600&seq=5&orientation=portrait',
    description: 'Premium leather handbag with exquisite craftsmanship and timeless appeal. A statement piece for any outfit.',
    category: 'Accessories',
    inStock: true,
    sizes: ['One Size'],
    colors: ['Cognac', 'Black', 'Navy', 'Burgundy']
  },
  {
    id: '6',
    name: 'Printed Scarf',
    price: 79.99,
    image: 'https://readdy.ai/api/search-image?query=luxury%20silk%20scarf%20with%20elegant%20floral%20pattern%2C%20fashion%20accessories%20photography%2C%20clean%20background%2C%20sophisticated%20styling%2C%20premium%20quality%20fabric%2C%20vibrant%20colors%2C%20artistic%20design%2C%20elegant%20draping&width=400&height=600&seq=6&orientation=portrait',
    description: 'Silk scarf with artistic print and luxurious feel. Perfect accessory to elevate any look.',
    category: 'Accessories',
    inStock: true,
    sizes: ['One Size'],
    colors: ['Floral Multi', 'Abstract Blue', 'Geometric Gold', 'Rose Pattern']
  },
  {
    id: '7',
    name: 'Maxi Dress',
    price: 199.99,
    image: 'https://readdy.ai/api/search-image?query=elegant%20maxi%20dress%20in%20navy%20blue%20color%2C%20flowing%20long%20dress%2C%20luxury%20fashion%20photography%2C%20clean%20background%2C%20sophisticated%20styling%2C%20premium%20fabric%2C%20summer%20elegance%2C%20graceful%20silhouette&width=400&height=600&seq=7&orientation=portrait',
    description: 'Flowing maxi dress with elegant silhouette and premium fabric. Perfect for summer occasions.',
    category: 'Casual Wear',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Coral', 'Sage Green', 'Dusty Rose']
  },
  {
    id: '8',
    name: 'Statement Necklace',
    price: 149.99,
    image: 'https://readdy.ai/api/search-image?query=luxury%20statement%20necklace%20in%20gold%20finish%2C%20elegant%20jewelry%20photography%2C%20clean%20white%20background%2C%20sophisticated%20styling%2C%20premium%20quality%2C%20artistic%20design%2C%20glamorous%20accessories%2C%20high-end%20fashion%20jewelry&width=400&height=600&seq=8&orientation=portrait',
    description: 'Bold statement necklace with intricate design and premium finish. Perfect for special occasions.',
    category: 'Jewelry',
    inStock: true,
    sizes: ['One Size'],
    colors: ['Gold', 'Silver', 'Rose Gold', 'Antique Bronze']
  },
  {
    id: '9',
    name: 'Trench Coat',
    price: 289.99,
    image: 'https://readdy.ai/api/search-image?query=classic%20trench%20coat%20in%20beige%20color%2C%20luxury%20outerwear%20photography%2C%20clean%20background%2C%20sophisticated%20styling%2C%20premium%20fabric%2C%20timeless%20design%2C%20professional%20fashion%2C%20elegant%20silhouette&width=400&height=600&seq=9&orientation=portrait',
    description: 'Classic trench coat with timeless design and premium materials. Essential outerwear piece.',
    category: 'Outerwear',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Beige', 'Black', 'Navy', 'Olive']
  },
  {
    id: '10',
    name: 'Silk Blouse',
    price: 119.99,
    image: 'https://readdy.ai/api/search-image?query=elegant%20silk%20blouse%20in%20ivory%20color%2C%20luxury%20fashion%20photography%2C%20clean%20background%2C%20sophisticated%20styling%2C%20premium%20fabric%2C%20professional%20wear%2C%20timeless%20design%2C%20refined%20elegance&width=400&height=600&seq=10&orientation=portrait',
    description: 'Luxurious silk blouse with refined details and elegant cut. Perfect for professional and casual styling.',
    category: 'Tops',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Blush', 'Sage', 'Charcoal']
  },
  {
    id: '11',
    name: 'Pencil Skirt',
    price: 89.99,
    image: 'https://readdy.ai/api/search-image?query=elegant%20pencil%20skirt%20in%20black%20color%2C%20professional%20fashion%20photography%2C%20clean%20background%2C%20sophisticated%20styling%2C%20premium%20fabric%2C%20business%20wear%2C%20sleek%20silhouette%2C%20modern%20design&width=400&height=600&seq=11&orientation=portrait',
    description: 'Classic pencil skirt with flattering fit and premium fabric. Essential piece for professional wardrobe.',
    category: 'Bottoms',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Charcoal', 'Burgundy']
  },
  {
    id: '12',
    name: 'Leather Jacket',
    price: 349.99,
    image: 'https://readdy.ai/api/search-image?query=luxury%20leather%20jacket%20in%20black%20color%2C%20premium%20outerwear%20photography%2C%20clean%20background%2C%20sophisticated%20styling%2C%20high-quality%20leather%2C%20modern%20design%2C%20edgy%20fashion%2C%20contemporary%20style&width=400&height=600&seq=12&orientation=portrait',
    description: 'Premium leather jacket with contemporary design and superior craftsmanship. A versatile statement piece.',
    category: 'Outerwear',
    inStock: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown', 'Burgundy', 'Navy']
  }
];

export const categories = [
  'All',
  'Evening Wear',
  'Workwear',
  'Party Wear',
  'Knitwear',
  'Accessories',
  'Casual Wear',
  'Jewelry',
  'Outerwear',
  'Tops',
  'Bottoms'
];
