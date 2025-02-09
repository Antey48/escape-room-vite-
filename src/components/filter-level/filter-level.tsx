import { memo } from 'react';
import { LevelKeysType, LevelsType} from '../../types/types';


type LevelListProps = {
  levels: LevelsType;
  onCurrentLevelChange: (level: LevelKeysType) => void;
   currentLevel: LevelKeysType;
};

type FilterLevelProps = {
   level: LevelKeysType;
   isActive: boolean;
   onCurrentLevelChange: (city: LevelKeysType) => void;
  };

function FilterLevelItem(props:FilterLevelProps): JSX.Element {
  const { level, isActive, onCurrentLevelChange } = props;
  return (
    <li className="filter__item">
      <input type="radio" name="level" id={level.eng} defaultChecked = {isActive} />
      <label className="filter__label" htmlFor={level.eng}>
        <span className="filter__label-text">{level.rus}</span>
      </label>
    </li>
  );
}

const FilterLevelList = memo(({levels, currentLevel, onCurrentLevelChange}:LevelListProps): JSX.Element => (
  <ul className="filter__list">
    {
      levels.map((level) => (
        <FilterLevelItem
          key={level.eng}
          level={level}
          isActive={level.eng === currentLevel.eng}
          onCurrentLevelChange={onCurrentLevelChange}
        />
      ))
    }
  </ul>
));

FilterLevelList.displayName = 'FilterLevelList';

export default FilterLevelList;
