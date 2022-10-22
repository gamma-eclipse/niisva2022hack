import { makeAutoObservable } from 'mobx';
import { axiosMock } from 'shared/helpers/axiosMock';
import { generateCategories } from 'shared/helpers/generateCategories';
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
    this.categories = generateCategories(this.analyzes, this.CATEGORY_NAMES);
  }
}

export const analyzeStore = new AnalyzeStore();
