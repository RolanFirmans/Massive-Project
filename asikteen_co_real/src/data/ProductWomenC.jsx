import "../Css/Css.css";
import ThriftHoodie from '../assets/img/WomenC/ThriftHoodie.png';
import ThrifLongShirt from '../assets/img/WomenC/ThrifLongShirt.png';
import ThriftTShirt from '../assets/img/WomenC/ThriftTShirt.png';
import ThriftSweaterVintage from '../assets/img/WomenC/ThriftSweaterVintage.png';
import ThriftSkenaTShirt from '../assets/img/WomenC/ThriftSkenaTShirt.png';
import UniqloXKaws from '../assets/img/WomenC/UniqloXKaws.png';
import ThriftWinterSweater from '../assets/img/WomenC/ThriftWinterSweater.png';
import ThriftKemejaFlanel from '../assets/img/WomenC/ThriftKemejaFlanel.png';
import BAPECamoShark from '../assets/img/WomenC/BAPECamoShark.png';
import AirForceParanoise from '../assets/img/SepatuW/AirForceParanoise.png';
import NikeDunk from '../assets/img/SepatuW/NikeDunk.png';
import AdidasSamba from '../assets/img/SepatuW/AdidasSamba.png';
import AirJordan from '../assets/img/SepatuW/AirJordan.png';
import ConverseChuckTaylor from '../assets/img/SepatuW/ConverseChuckTaylor.png';
import VansOldSchool from '../assets/img/SepatuW/VansOldSchool.png';
import DrMartens from '../assets/img/SepatuW/DrMartens.png';
import NikeSuperrep from '../assets/img/SepatuW/NikeSuperrep.png';
import ConverseChuckPlus from '../assets/img/SepatuW/ConverseChuckPlus.png';
import Courduroy from '../assets/img/CelanaW/Courduroy.png';
import DenimBoysJeans from '../assets/img/CelanaW/DenimBoysJeans.png';
import RickowensSlabJeans from '../assets/img/CelanaW/RickowensSlabJeans.png';
import BeltCargoPantsBlack from '../assets/img/CelanaW/BeltCargoPantsBlack.png';
import FilaTrackPantsSize from '../assets/img/CelanaW/FilaTrackPantsSize.png';
import AdidasTrackPants from '../assets/img/CelanaW/AdidasTrackPants.png';
import v from '../assets/img/CelanaW/v.png';
import x from '../assets/img/CelanaW/x.png';
import b from '../assets/img/CelanaW/b.png';
import CelanaConverse from '../assets/img/CelanaW/CelanaConverse.png';
import Roughneck from '../assets/img/WomenC/Roughneck.png'
import Thunder from '../assets/img/SepatuW/Thunder.png'
import Zanobasic from '../assets/img/WomenC/Zanobasic.png'
import VansCheckerboard from '../assets/img/SepatuW/VansCheckerboard.png'
import VansSk8Basic from '../assets/img/SepatuW/VansSk8Basic.png'
import VansSk8 from '../assets/img/SepatuW/VansSk8.png'
import NikeBlazerMid77 from '../assets/img/SepatuW/NikeBlazerMid77.png'
import DiadoraKloverWoman from '../assets/img/SepatuW/DiadoraKloverWoman.png'
import StYvesSandal from '../assets/img/SepatuW/StYvesSandal.png'
import NikeAirReslon from '../assets/img/SepatuW/NikeAirReslon.png'
import SkechersRunning from '../assets/img/SepatuW/SkechersRunning.png'
import Loffler from '../assets/img/CelanaW/Loffler.png'
import pdl from '../assets/img/CelanaW/pdl.png'
import Celananonmerk from '../assets/img/CelanaW/Celananonmerk.png'


const products = [
    {
      id: 1,
      image: Thunder,
      title: 'Thunder (41)',
      price: '70000',
      oldPrice: '200.000',
      category: 'Shoes',
      size: '41',
      materials: 'Made from premium canvas materials',
      careinstructions: 'Use a gentle detergent, do not use bleach',
      detail: 'Sepatu dengan kualitas terbaik dan desain stylish, nyaman digunakan dalam berbagai kondisi.'
    },
    {
      id: 2,
      image: Roughneck,
      title: 'Toen Country',
      price: '100.000',
      oldPrice: '200.000',
      category: 'Clothes',
      size: 'L',
      materials: 'Made of high quality cotton',
      careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
      detail: 'Baju dengan kualitas terbaik, nyaman dipakai, dan desain yang stylish.'
    },
    {
      id: 3,
      image: CelanaConverse,
      title: 'Celana Converse',
      price: '50.000',
      oldPrice: '150.000',
      category: 'Pants',
      size: 'L',
      materials: 'Made of high-quality cotton denim',
      careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
      detail: 'Celana jeans dengan kualitas terbaik dan desain modern, nyaman dipakai sepanjang hari.'
    },
    {
      id: 4,
      image: Zanobasic,
      title: 'Zano basic',
      price: '70.000',
      oldPrice: '199.000',
      category: 'Clothes',
      size: 'L',
      materials: 'Made of high quality cotton',
      careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
      detail: 'Baju dengan kualitas terbaik, nyaman dipakai, dan desain yang stylish.'
    },
    {
      id: 5,
      image: ThriftSkenaTShirt,
      title: 'Graphics T-Shirt',
      price: '50.000',
      oldPrice: '150.000',
      category: 'Clothes',
      size: 'L',
      materials: 'Made of high quality cotton',
      careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
      detail: 'Baju dengan kualitas terbaik, nyaman dipakai, dan desain yang stylish.'
    },
    {
      id: 6,
      image: UniqloXKaws,
      title: 'UniqloXKaws T-Shirt',
      price: '80.000',
      oldPrice: '200.000',
      category: 'Clothes',
      size: 'L',
      materials: 'Made of high quality cotton',
      careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
      detail: 'Baju dengan kualitas terbaik, nyaman dipakai, dan desain yang stylish, baju edisi terbatas.'
    },
    {
        id: 7,
        image: ThriftWinterSweater,
        title: 'Winter Sweater',
        price: '70.000',
        oldPrice: '199.000',
        category: 'Clothes',
        size: 'XL',
        materials: 'Made of high quality cotton',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Baju dengan bahan yang menghangatkan, nyaman dipakai, dan desain yang stylish.'
      },
      {
        id: 8,
        image: ThriftKemejaFlanel,
        title: 'Flanel Shirt',
        price: '70.000',
        oldPrice: '180.000',
        category: 'Clothes',
        size: 'XL',
        materials: 'Made of high quality cotton',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Baju kemeja dengan lengan panjang, nyaman dipakai, dan desain yang stylish.'
      },
      {
        id: 9,
        image: BAPECamoShark,
        title: 'BAPE Shark Hoodie',
        price: '200.000',
        oldPrice: '1.500.000',
        category: 'Clothes',
        size: 'XL',
        materials: 'Made of high quality cotton fleece',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Hoodie dengan bahan tebal, nyaman dipakai, dan desain yang stylish.'
      },
      {
        id: 10,
        image: VansCheckerboard,
        title: 'Vans Checkerboard (41)',
        price: '70.000',
        oldPrice: '79.000',
        category: 'Shoes',
        size: '41',
        materials: 'Made from premium canvas materials',
        careinstructions: 'Use a gentle detergent, do not use bleach',
        detail: 'Sepatu dengan Vans classic, nyaman dipakai, dan desain yang trendy.'
      },
      {
        id: 11,
        image: VansSk8Basic,
        title: 'Vans Sk8 Basic (41)',
        price: '100.000',
        oldPrice: '850.000',
        category: 'Shoes',
        size: '41',
        materials: 'Made from premium canvas materials',
        careinstructions: 'Use a gentle detergent, do not use bleach',
        detail: 'Kombinasi warna hitam dan putih, Upper suede,tekstil, Insole tekstil, Rubber outsole, Tali depan, Round toe.'
      },
      {
        id: 12,
        image: VansSk8,
        title: 'Vans Sk8 (41)',
        price: '80.000',
        oldPrice: '750.000',
        category: 'Shoes',
        size: '41',
        materials: 'Made from premium canvas materials',
        careinstructions: 'Use a gentle detergent, do not use bleach',
        detail: 'Kombinasi warna maroon dan tobacco, Upper suede,tekstil, Insole tekstil, Rubber outsole, Tali depan, Round toe.'
      },
      {
        id: 13,
        image: NikeBlazerMid77,
        title: 'Nike Blazer Mid77 (42)',
        price: '150.000',
        oldPrice: '1.200.000',
        category: 'Shoes',
        size: '42',
        materials: 'Made from premium leather materials',
        careinstructions: 'Use a gentle detergent, do not use bleach',
        detail: 'Kombinasi warna putih, hitam, dan orange, Leather upper, Insole tekstil, Rubber Outsole, Tali depan, Round toe.'
      },
      {
        id: 14,
        image: AirForceParanoise,
        title: 'Nike x Paranoise (44)',
        price: '200.000',
        oldPrice: '1.800.000',
        category: 'Shoes',
        size: '44',
        materials: 'Made from premium leather materials',
        careinstructions: 'Use a gentle detergent, do not use bleach',
        detail: 'Kombinasi warna hitan dan putih, Upper leather, Insole tekstil, Rubber outsole, Tali depan, Round toe.'
      },
      {
        id: 15,
        image: DiadoraKloverWoman,
        title: 'Diadora Klover Woman (37)',
        price: '100.000',
        oldPrice: '350.000',
        category: 'Shoes',
        size: '37',
        materials: 'Made from premium canvas materials',
        careinstructions: 'Use a gentle detergent, do not use bleach',
        detail: 'Atas 60% Poliuretan + 40% Poliester, Sol 100% Phylon'
      },
      {
        id: 16,
        image: SkechersRunning,
        title: 'Skechers Running (38)',
        price: '100.000',
        oldPrice: '450.000',
        category: 'Shoes',
        size: '38',
        materials: 'Made from premium canvas materials',
        careinstructions: 'Use a gentle detergent, do not use bleach',
        detail: 'Warna hitam, Knit upper, Insole Tekstil dengan arch fit cushioning yang nyaman, Rubber Outsole, Tali depan, Round Toe'
      },
      {
        id: 17,
        image: StYvesSandal,
        title: 'St.Yves Sandal (37)',
        price: '150.000',
        oldPrice: '900.000',
        category: 'Shoes',
        size: '37',
        materials: 'Made from premium canvas materials',
        careinstructions: 'Use a gentle detergent, do not use bleach',
        detail: 'Warna Khaki, Atas PVC, Sol Termoplastik Karet'
      },
      {
        id: 17  ,
        image: Loffler,
        title: 'Loffler (Size L)',
        price: '70.000',
        oldPrice: '150.000',
        category: 'Pants',
        size: 'L',
        materials: 'Made of high-quality cotton denim',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Celana training dengan kualitas terbaik dan enak digunakan untuk berolahraga atau aktivitas santai.'
      },
      {
        id: 18,
        image: pdl,
        title: 'PDL Pants (Size L)',
        price: '50.000',
        oldPrice: '100.000',
        category: 'Pants',
        size: 'L',
        materials: 'Made of high-quality cotton denim',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Celana PDL dengan desain modern dan bahan yang nyaman, cocok untuk aktivitas sehari-hari.'
      },
      {
        id: 19,
        image: Celananonmerk,
        title: 'Celana NonMerk (Size L)',
        price: '50.000',
        oldPrice: '90.000',
        category: 'Pants',
        size: 'L',
        materials: 'Made of high-quality cotton denim',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Celana dengan desain modern dan minimalis, bahan lembut dan nyaman untuk aktivitas sehari-hari'
      },
      {
        id: 20,
        image: RickowensSlabJeans,
        title: 'Rickowens Jeans (Size M)',
        price: '100.000',
        oldPrice: '350.000',
        category: 'Pants',
        size: 'M',
        materials: 'Made of high-quality cotton denim',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Celana Jeans dengan bahan tebal dan nyaman'
      },
      {
        id: 21,
        image: BeltCargoPantsBlack,
        title: 'Belt Cargo Pants (Size M)',
        price: '80.000',
        oldPrice: '200.000',
        category: 'Pants',
        size: 'M',
        materials: 'Made of high-quality cotton denim',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Celana cargo dengan bahan yang cukup tebal dan disertai banyak kantong'
      },
      {
        id: 22,
        image: FilaTrackPantsSize,
        title: 'Filla Track Pants(Size M)',
        price: '80.000',
        oldPrice: '250.000',
        category: 'Pants',
        size: 'M',
        materials: 'Made of high-quality cotton denim',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Celana Training dari brnad Filla dengan bahan yang berkualitas bagus'
      },
      {
        id: 23,
        image: AdidasTrackPants,
        title: 'Adidas Track Pants(Size L)',
        price: '90.000',
        oldPrice: '300.000',
        category: 'Pants',
        size: 'L',
        materials: 'Made of high-quality cotton denim',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Celana Training dari brnad Adidas dengan bahan yang berkualitas bagus'
      },
      {
        id: 24,
        image: v,
        title: 'Ankle Pants (Size M)',
        price: '80.000',
        oldPrice: '150.000',
        category: 'Pants',
        size: 'M',
        materials: 'Made of high-quality cotton denim',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Celana ankle pants dengan gaya formal dan modern, nyaman saat dipakai'
      },
      {
        id: 25,
        image: ThriftHoodie,
        title: 'Thrift Hoodie',
        price: '70000',
        oldPrice: '79.000',
        category: 'Clothes',
        size: 'L',
        materials: 'Cotton Fleece',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Hoodie dengan bahan yang tebal dan lembut'
      },
      {
        id: 26,
        image: ThriftTShirt,
        title: 'Thrift Shirt',
        price: '70.000',
        oldPrice: '150.000',
        category: 'Clothes',
        size: 'L',
        materials: 'Cotton',
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron',
        detail: 'Baju kaos polos dengan bahan yang lumayan tebal'
      },
  ];
  
export { products };
