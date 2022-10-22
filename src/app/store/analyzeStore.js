import { makeAutoObservable } from 'mobx';
import { axiosMock } from 'shared/helpers/axiosMock';
import { analyzesMock } from 'shared/mocks/analyzesMock';

import { filtersStore } from './filtersStore';

class AnalyzeStore {
  constructor() {
    makeAutoObservable(this);
  }

  CATEGORY_NAMES = ['name', 'purpose'];

  CATEGORY_NAMES_MAP = {
    name: 'Название источника',
    purpose: 'Назначение',
  };

  analyzes = null;

  categories = null;

  get filteredAnalyzes() {
    return filtersStore.filterAnalyzeResults(this.analyzes);
  }

  fetching = false;

  fetch = async () => {
    if (this.fetching) return;

    this.fetching = true;
    const data = await axiosMock(analyzesMock);
    this.fetching = false;

    if (data) {
      this.analyzes = data;
      this.genCategories();
    }
  };

  genCategories() {
    const categoriesMap = {};

    for (const name of this.CATEGORY_NAMES) {
      categoriesMap[name] = {};
    }

    for (const analyze of this.analyzes) {
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

    console.log(categoriesMap);

    this.categories = categoriesMap;
  }
}

export const analyzeStore = new AnalyzeStore();
