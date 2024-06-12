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
      detail: ''
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
      careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
      careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
      careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
      careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
      careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach'
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
        careinstructions: 'Use a gentle detergent, do not use bleach'
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
        careinstructions: 'Use a gentle detergent, do not use bleach'
      },
      {
        id: 13,
        image: NikeBlazerMid77,
        title: 'Nike Blazer Mid77 (42)',
        price: '150.000',
        oldPrice: '1.200.000',
        category: 'Shoes',
        size: '42',
        materials: 'Made from premium canvas materials',
        careinstructions: 'Use a gentle detergent, do not use bleach'
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
        careinstructions: 'Use a gentle detergent, do not use bleach'
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
        careinstructions: 'Use a gentle detergent, do not use bleach'
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
        careinstructions: 'Use a gentle detergent, do not use bleach'
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
        careinstructions: 'Use a gentle detergent, do not use bleach'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
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
        careinstructions: 'Use a gentle detergent, do not use bleach, low temperature iron'
      },
  ];
  
export { products };
