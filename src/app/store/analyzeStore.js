import { makeAutoObservable } from 'mobx';
import { axiosMock } from 'shared/helpers/axiosMock';
import { analyzesMock } from 'shared/mocks/analyzesMock';

import { filtersStore } from './filtersStore';

class AnalyzeStore {
  constructor() {
    makeAutoObservable(this);
  }

  CATEGORY_NAMES = ['name', 'purpose'];

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
      Object.entries(analyze.classification).forEach(([name, value]) => {
        if (!categoriesMap[name][value]) {
          categoriesMap[name][value] = {
            packages: 0,
            traffic: 0,
          };
        }
        categoriesMap[name][value].packages += analyze.packages;
        categoriesMap[name][value].traffic += analyze.traffic;
      });
    }

    console.log(categoriesMap);

    this.categories = categoriesMap;
  }
}

export const analyzeStore = new AnalyzeStore();
