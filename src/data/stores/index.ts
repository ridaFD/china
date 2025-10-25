import { FeaturedStore } from './types';

// Import all subcategory store arrays
import { home_decor_decorationsStores } from './home-decor-decorations';
import { candles_fragrancesStores } from './candles-fragrances';
import { vases_plantersStores } from './vases-planters';
import { kitchen_diningStores } from './kitchen-dining';
import { bathroom_fixturesStores } from './bathroom-fixtures';
import { lighting_lampsStores } from './lighting-lamps';
import { furnitureStores } from './furniture';
import { garden_outdoorStores } from './garden-outdoor';
import { bedding_textilesStores } from './bedding-textiles';
import { storage_organizationStores } from './storage-organization';
import { womens_clothingStores } from './womens-clothing';
import { mens_clothingStores } from './mens-clothing';
import { childrens_clothingStores } from './childrens-clothing';
import { sportswear_activewearStores } from './sportswear-activewear';
import { lingerie_underwearStores } from './lingerie-underwear';
import { swimwear_beachwearStores } from './swimwear-beachwear';
import { outerwear_coatsStores } from './outerwear-coats';
import { uniforms_workwearStores } from './uniforms-workwear';
import { mobile_phones_tabletsStores } from './mobile-phones-tablets';
import { computers_laptopsStores } from './computers-laptops';
import { audio_video_equipmentStores } from './audio-video-equipment';
import { smart_home_devicesStores } from './smart-home-devices';
import { phone_computer_accessoriesStores } from './phone-computer-accessories';
import { cables_chargersStores } from './cables-chargers';
import { cosmetics_makeupStores } from './cosmetics-makeup';
import { skincare_productsStores } from './skincare-products';
import { hair_care_stylingStores } from './hair-care-styling';
import { perfumes_fragrancesStores } from './perfumes-fragrances';
import { fitness_equipmentStores } from './fitness-equipment';
import { outdoor_campingStores } from './outdoor-camping';
import { sports_apparel_shoesStores } from './sports-apparel-shoes';
import { childrens_toysStores } from './childrens-toys';
import { baby_care_productsStores } from './baby-care-products';
import { educational_toys_booksStores } from './educational-toys-books';
import { stationery_paperStores } from './stationery-paper';
import { office_equipmentStores } from './office-equipment';
import { school_suppliesStores } from './school-supplies';
import { auto_parts_accessoriesStores } from './auto-parts-accessories';
import { motorcycle_partsStores } from './motorcycle-parts';
import { car_electronicsStores } from './car-electronics';
import { fashion_jewelryStores } from './fashion-jewelry';
import { watches_timepiecesStores } from './watches-timepieces';
import { bags_handbagsStores } from './bags-handbags';
import { belts_scarvesStores } from './belts-scarves';
import { womens_shoesStores } from './womens-shoes';
import { mens_shoesStores } from './mens-shoes';
import { childrens_shoesStores } from './childrens-shoes';
import { packaged_foods_snacksStores } from './packaged-foods-snacks';
import { tea_coffeeStores } from './tea-coffee';
import { medical_suppliesStores } from './medical-supplies';
import { health_supplementsStores } from './health-supplements';
import { hand_power_toolsStores } from './hand-power-tools';
import { industrial_equipmentStores } from './industrial-equipment';
import { art_suppliesStores } from './art-supplies';
import { craft_materialsStores } from './craft-materials';

// Combine all stores into a single array
export const allStores: FeaturedStore[] = [
  ...home_decor_decorationsStores,
  ...candles_fragrancesStores,
  ...vases_plantersStores,
  ...kitchen_diningStores,
  ...bathroom_fixturesStores,
  ...lighting_lampsStores,
  ...furnitureStores,
  ...garden_outdoorStores,
  ...bedding_textilesStores,
  ...storage_organizationStores,
  ...womens_clothingStores,
  ...mens_clothingStores,
  ...childrens_clothingStores,
  ...sportswear_activewearStores,
  ...lingerie_underwearStores,
  ...swimwear_beachwearStores,
  ...outerwear_coatsStores,
  ...uniforms_workwearStores,
  ...mobile_phones_tabletsStores,
  ...computers_laptopsStores,
  ...audio_video_equipmentStores,
  ...smart_home_devicesStores,
  ...phone_computer_accessoriesStores,
  ...cables_chargersStores,
  ...cosmetics_makeupStores,
  ...skincare_productsStores,
  ...hair_care_stylingStores,
  ...perfumes_fragrancesStores,
  ...fitness_equipmentStores,
  ...outdoor_campingStores,
  ...sports_apparel_shoesStores,
  ...childrens_toysStores,
  ...baby_care_productsStores,
  ...educational_toys_booksStores,
  ...stationery_paperStores,
  ...office_equipmentStores,
  ...school_suppliesStores,
  ...auto_parts_accessoriesStores,
  ...motorcycle_partsStores,
  ...car_electronicsStores,
  ...fashion_jewelryStores,
  ...watches_timepiecesStores,
  ...bags_handbagsStores,
  ...belts_scarvesStores,
  ...womens_shoesStores,
  ...mens_shoesStores,
  ...childrens_shoesStores,
  ...packaged_foods_snacksStores,
  ...tea_coffeeStores,
  ...medical_suppliesStores,
  ...health_supplementsStores,
  ...hand_power_toolsStores,
  ...industrial_equipmentStores,
  ...art_suppliesStores,
  ...craft_materialsStores,
];

// Re-export types for convenience
export { storeCategories, categoryGroups, type FeaturedStore } from './types';
