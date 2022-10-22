export function generateCategories(analyzes, categoryNames) {
  const categoriesMap = {};

  for (const name of categoryNames) {
    categoriesMap[name] = {};
  }

  for (const analyze of analyzes) {
    Object.entries(analyze.classification).forEach(([categoryName, categoryValue]) => {
      if (!categoriesMap[categoryName][categoryValue]) {
        categoriesMap[categoryName][categoryValue] = {
          packages: 0,
          traffic: 0,
        };
      }
      categoriesMap[categoryName][categoryValue].packages += analyze.packages;
      categoriesMap[categoryName][categoryValue].traffic += analyze.traffic;
    });
  }

  return categoriesMap;
}
