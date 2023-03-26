import type { HolaOptionsList } from '@/models/hola-option.model';

import styles from './hola-select.module.scss';

export const HolaSelect = ({
  dataSource,
  onChange,
}: {
  dataSource: HolaOptionsList;
  onChange?: Function;
}) => {
  return (
    <div className={styles['hola-select-wrapper']}>
      <select onChange={(el) => onChange && onChange(el.target.value)}>
        {dataSource &&
          dataSource.map((el, i) => (
            <option key={i} value={el?.value}>
              {el?.text}
            </option>
          ))}
      </select>
    </div>
  );
};
