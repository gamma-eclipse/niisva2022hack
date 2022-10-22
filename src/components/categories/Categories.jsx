import { Spoiler } from 'components/spoiler';
import { observer } from 'mobx-react-lite';

import CategoriesTable from './CategoriesTable';

export function Categories({ categories }) {
  return (
    <Spoiler title="Категории">
      <CategoriesTable categories={categories} />
    </Spoiler>
  );
}
