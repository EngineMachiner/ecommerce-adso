interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Sizes[];
  slug: string;
  tags: string[];
  title: string;
  type: Types;
  gender: Genders;
  createdAt?: string;
  updatedAt?: string;
}

type Sizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | '3XL';
type Types = 'Camisetas' | 'Buzos' | 'Gorras';
type Genders = 'Hombre' | 'Mujer' | 'Unisex';

interface SeedData {
  products: SeedProduct[];
}

export const initialData: SeedData = {
  products: [
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Android_M1_B.jpg', 'Android_M1_N.jpg'],
      inStock: 7,
      price: 69000,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      slug: 'camiseta-logo-cent-developer-android',
      type: 'Camisetas',
      tags: ['sweatshirt'],
      title: 'Camiseta Developer Android',
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Angular_M1_B.jpg', 'Angular_M1_B.jpg'],
      inStock: 5,
      price: 69000,
      sizes: ['XS', 'S', 'M', 'XL', 'XXL'],
      slug: 'camiseta-logo-cent-developer-angular',
      type: 'Camisetas',
      tags: ['angular'],
      title: 'Camiseta Developer Angular',
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Archlinux1_B.jpg', 'Archlinux1_N.jpg'],
      inStock: 13,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      slug: 'camiseta-logo-cent-developer-archlnux',
      type: 'Camisetas',
      tags: ['archlinux'],
      title: 'Camiseta Arch Linux',
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Aws_M1_B.jpg', 'Aws_M1_N.jpg'],
      inStock: 50,
      price: 45,
      sizes: ['XS', 'S', 'M', 'L'],
      slug: 'camiseta-logo-cent-developer-aws',
      type: 'Camisetas',
      tags: ['aws'],
      title: 'Camiseta AWS',
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Aws_Azure_M1_B.jpg', 'Aws_Azure_M1.jpg'],
      inStock: 50,
      price: 40,
      sizes: ['M', 'L', 'XL', 'XXL'],
      slug: 'camiseta-logo-cent-developer-aws-azure',
      type: 'Camisetas',
      tags: ['azure', 'aws'],
      title: 'Camiseta Azure - AWS',
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Azure_M1_B.jpg', 'Azure_M1_N.jpg'],
      inStock: 0,
      price: 35,
      sizes: ['M', 'L', 'XL', 'XXL'],
      slug: 'camiseta-logo-cent-developer-azure',
      type: 'Camisetas',
      tags: ['azure'],
      title: "Camiseta Azure",
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Css_M1_B.jpg', 'Css_M1_N.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'camiseta-logo-cent-developer-css',
      type: 'Camisetas',
      tags: ['css'],
      title: "Camiseta CSS",
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Docker_M1_B.jpg', 'Docker_M1_N.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'camiseta-logo-cent-docker',
      type: 'Camisetas',
      tags: ['docker'],
      title: "Camiseta Docker",
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Cisco_M1_B.jpg', 'Cisco_M1_N.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'camiseta-logo-cent-developer-Cisco',
      type: 'Camisetas',
      tags: ['Cisco'],
      title: "Camiseta Cisco",
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Csharp_M1_B.jpg', 'Csharp_M1_N.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'camiseta-logo-cent-developer-Csharp',
      type: 'Camisetas',
      tags: ['Csharp'],
      title: "Camiseta Csharp",
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Edubuntu1_B.jpg', 'Edubuntu1_N.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'camiseta-logo-cent-developer-Edubuntu',
      type: 'Camisetas',
      tags: ['Edubuntu'],
      title: "Camiseta Edubuntu",
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Flutter_M1_B.jpg', 'Flutter_M1_N.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'camiseta-logo-cent-developer-Flutter',
      type: 'Camisetas',
      tags: ['Flutter'],
      title: "Camiseta Flutter",
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Github_M1_B.jpg', 'Github_M1_N.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'camiseta-logo-cent-developer-Github',
      type: 'Camisetas',
      tags: ['Github'],
      title: "Camiseta Github",
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Github_TshirtB.jpg', 'Github_TshirtB2.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'camiseta-logo-cent-developer-Github-copilot',
      type: 'Camisetas',
      tags: ['Github'],
      title: "Camiseta Github Copilot",
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Gitlab_M1_B.jpg', 'Gitlab_M1_N.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'camiseta-logo-cent-developer-Github-copilot',
      type: 'Camisetas',
      tags: ['Github'],
      title: "Camiseta Github Copilot",
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['Golang.jpg', 'Golang_N.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'camiseta-logo-cent-developer-Github-copilot',
      type: 'Camisetas',
      tags: ['Github'],
      title: "Camiseta Github Copilot",
      gender: 'Hombre',
    },
    {
      description:
        'La camiseta tradicional de toda la vida Corte recto, clásico y holgado Tejido grueso de 180 g/m² de gramaje, colores lisos en algodón sanforizado. El color gris jaspeado es 90 % algodón y 10 % poliéster; el denim jaspeado es 50 % poliéster. Cuello y dobladillos con doble puntada para una mayor durabilidad La imprenta independiente que imprime este producto ha sido evaluada de acuerdo con los estándares de la Organización Internacional del Trabajo.La imprenta independiente que imprime este producto obtiene sus materiales de fabricantes comprometidos con la mejora de las prácticas de cultivo de algodón.',
      images: ['GoogleCloud_M1.jpg', 'GoogleCloud_M1C_N.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'camiseta-logo-cent-developer-Github-copilot',
      type: 'Camisetas',
      tags: ['Github'],
      title: "Camiseta Github Copilot",
      gender: 'Hombre',
    },
    {
      description:
        'Gorra BORDADA en Drill Vulcano 100% algodón tipo beisbolera con botón, costuras encintadas con frente partido y fusionado con ojales en los dos laterales, 4 costuras en la visera, broche hebilla caimán. Elaborada en tela dril super 8(100%) peso 155 gr. Tamaño graduable estandard adulto: 50-60 cm . Hebilla metalica.',
      images: ['gorra-githut-2.jpg','gorra_github.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'gorra-tech-github',
      type: 'Gorras',
      tags: ['github'],
      title: "Gorra Github",
      gender: 'Unisex',
    },
    {
      description:
        'Gorra BORDADA en Drill Vulcano 100% algodón tipo beisbolera con botón, costuras encintadas con frente partido y fusionado con ojales en los dos laterales, 4 costuras en la visera, broche hebilla caimán. Elaborada en tela dril super 8(100%) peso 155 gr. Tamaño graduable estandard adulto: 50-60 cm . Hebilla metalica.',
      images: ['gorra_react.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'gorra-tech-react',
      type: 'Gorras',
      tags: ['react'],
      title: "Gorra react",
      gender: 'Unisex',
    },
    {
      description:
        'Gorra BORDADA en Drill Vulcano 100% algodón tipo beisbolera con botón, costuras encintadas con frente partido y fusionado con ojales en los dos laterales, 4 costuras en la visera, broche hebilla caimán. Elaborada en tela dril super 8(100%) peso 155 gr. Tamaño graduable estandard adulto: 50-60 cm . Hebilla metalica.',
      images: ['gorra-js.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'gorra-tech-js',
      type: 'Gorras',
      tags: ['js'],
      title: "Gorra Javascript",
      gender: 'Unisex',
    },
    {
      description:
        'Gorra BORDADA en Drill Vulcano 100% algodón tipo beisbolera con botón, costuras encintadas con frente partido y fusionado con ojales en los dos laterales, 4 costuras en la visera, broche hebilla caimán. Elaborada en tela dril super 8(100%) peso 155 gr. Tamaño graduable estandard adulto: 50-60 cm . Hebilla metalica.',
      images: ['gorra-ubuntu.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'gorra-tech-ubuntu',
      type: 'Gorras',
      tags: ['ubuntu'],
      title: "Gorra ubuntu",
      gender: 'Unisex',
    },
    {
      description:
        'Gorra BORDADA en Drill Vulcano 100% algodón tipo beisbolera con botón, costuras encintadas con frente partido y fusionado con ojales en los dos laterales, 4 costuras en la visera, broche hebilla caimán. Elaborada en tela dril super 8(100%) peso 155 gr. Tamaño graduable estandard adulto: 50-60 cm . Hebilla metalica.',
      images: ['gorra-angular.jpg'],
      inStock: 15,
      price: 69000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'gorra-tech-angular',
      type: 'Gorras',
      tags: ['angular'],
      title: "Gorra angular",
      gender: 'Unisex',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-14.2.jpg', 'HOODIE-14.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-special',
      type: 'Buzos',
      tags: ['special'],
      title: "Buzo especial",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-1.2.jpg', 'HOODIE-1.1_2.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-frontend',
      type: 'Buzos',
      tags: ['frontend'],
      title: "Buzo Frontend",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-2.2.jpg', 'HOODIE-2.1_1.jpg' ],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-dev',
      type: 'Buzos',
      tags: ['dev'],
      title: "Buzo Dev",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-3.2_1.jpg', 'HOODIE-3.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-hello-world',
      type: 'Buzos',
      tags: ['hello-world'],
      title: "Buzo Hello World",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-4.2.jpg','HOODIE-4.1_2.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-binary',
      type: 'Buzos',
      tags: ['binary'],
      title: "Buzo Binary",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-5.2_1.jpg','HOODIE-5.1_1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-phone',
      type: 'Buzos',
      tags: ['phone'],
      title: "Buzo phone",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-8.2_1.jpg','HOODIE-8.1_2.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-cloud',
      type: 'Buzos',
      tags: ['cloud'],
      title: "Buzo cloud",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-9.2.jpg','HOODIE-9.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-cloud-2',
      type: 'Buzos',
      tags: ['cloud'],
      title: "Buzo cloud Unisex",
      gender: 'Unisex',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-10.2.jpg','HOODIE-10.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-python',
      type: 'Buzos',
      tags: ['python'],
      title: "Buzo python",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-11.2.jpg','HOODIE-11.4.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-chrome',
      type: 'Buzos',
      tags: ['chrome'],
      title: "Buzo chrome",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-12.2.jpg','HOODIE-12.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-atom',
      type: 'Buzos',
      tags: ['atom'],
      title: "Buzo atom",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-13.2_1.jpg','HOODIE-13.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-hola',
      type: 'Buzos',
      tags: ['hola'],
      title: "Buzo hola",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-15.2_1.jpg','HOODIE-15.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-emberd',
      type: 'Buzos',
      tags: ['emberd'],
      title: "Buzo emberd",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-16.2_1.jpg','HOODIE-16.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-id',
      type: 'Buzos',
      tags: ['dev-id'],
      title: "Buzo Id",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-17.2.jpg','HOODIE-17.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-linux',
      type: 'Buzos',
      tags: ['dev-linux'],
      title: "Buzo Linux",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-20.2.jpg','HOODIE-20.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-starkoverflow',
      type: 'Buzos',
      tags: ['dev-starkoverflow'],
      title: "Buzo starkoverflow",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-21.2.jpg','HOODIE-22.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-internet',
      type: 'Buzos',
      tags: ['dev-internet'],
      title: "Buzo internet",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-23.2.jpg','HOODIE-23.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-github',
      type: 'Buzos',
      tags: ['dev-github'],
      title: "Buzo github",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-24.2.jpg','HOODIE-24.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-json',
      type: 'Buzos',
      tags: ['dev-json'],
      title: "Buzo json",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-25.2.jpg','HOODIE-25.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-json-2',
      type: 'Buzos',
      tags: ['dev-json'],
      title: "Buzo json new",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-27.2_1.jpg','HOODIE-28.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-power-bi',
      type: 'Buzos',
      tags: ['dev-power-bi'],
      title: "Buzo Power Bi",
      gender: 'Hombre',
    },
    {
      description:
        'Buzo con capota y bolsillo tipo canguro en tela algodón perchado calidad nacional patprimo. Estampado en vinilo textil de Alta calidad. *Material suave con la piel, resistente y de excelente calidad.',
      images: ['HOODIE-30.2.jpg','HOODIE-30.1.jpg'],
      inStock: 15,
      price: 126000,
      sizes: ['S', 'M', 'L', 'XL'],
      slug: 'buzo-you-are-code',
      type: 'Buzos',
      tags: ['dev-code'],
      title: "Buzo code",
      gender: 'Hombre',
    },
  ],
};
