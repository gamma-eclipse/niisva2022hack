import { Spoiler } from 'components/spoiler';
import { observer } from 'mobx-react-lite';

import CategoriesTable from './CategoriesTable';

export function Categories({ categories }) {
  return (
    <Spoiler title="По категориям">
      <CategoriesTable categories={categories} />
    </Spoiler>
  );
}
