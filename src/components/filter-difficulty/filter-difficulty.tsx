import { memo } from 'react';


type LocationsListProps = {
  locations: CitiesType;
  pageNames: TypesPage;
  onCurrentCityChange: (city: CityKeys) => void;
   currentDifficulty: CityKeys;
};

// type LocationItemProps = {
//    location: CityKeys;
//    pageNames: TypesPage;
//    isActive: boolean;
//    onCurrentCityChange: (city: CityKeys) => void;
//   };

// function FilterDifficultyItem(props: LocationItemProps): JSX.Element {
//   const { location, isActive, pageNames, onCurrentCityChange } = props;
//   return (
//     <li className="locations__item" onClick = {() => onCurrentCityChange(location)}>
//       <LocationsItemLink
//         location={location}
//         pageNames={pageNames.Main}
//         isActive={isActive}
//       />
//     </li>
//   );
// }

const FilterDifficultyList = memo(({level, pageNames, currentLevel, onCurrentLevelChange}:LocationsListProps): JSX.Element => (
  <ul className="locations__list tabs__list">
    {
      locations.map((location) => (
        <LocationsItem
          key={location}
          pageNames={pageNames}
          location={location}
          isActive={location === currentCity}
          onCurrentCityChange={onCurrentCityChange}
        />
      ))
    }
  </ul>
));

FilterDifficulty.displayName = 'FilterDifficultyt';

export default FilterDifficulty;
