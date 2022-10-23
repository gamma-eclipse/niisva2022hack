import { toJS } from 'mobx';

export function generateCategories(analyzes, categoryNames) {
  // console.log(toJS(analyzes), toJS(categoryNames));

  const categoriesMap = {};

  for (const name of categoryNames) {
    categoriesMap[name] = {};
  }

  for (const analyze of analyzes) {
    Object.entries(analyze).forEach(([categoryName, categoryValue]) => {
      if (!categoryNames.includes(categoryName)) return;

      if (!categoriesMap[categoryName][categoryValue]) {
        categoriesMap[categoryName][categoryValue] = {
          packages: 0,
          traffic: 0,
        };
      }
      categoriesMap[categoryName][categoryValue].packages += 1;
      categoriesMap[categoryName][categoryValue].traffic += +analyze.traffic;
    });
  }

  // console.log(categoriesMap);

  return categoriesMap;
}
