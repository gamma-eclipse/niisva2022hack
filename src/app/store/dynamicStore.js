import { makeAutoObservable } from 'mobx';
import { axiosMock } from 'shared/helpers/axiosMock';
import { generateCategories } from 'shared/helpers/generateCategories';
import { analyzesMock } from 'shared/mocks/analyzesMock';

import { analyzeStore } from './analyzeStore';
import { filtersStore } from './filtersStore';

class DynamicStore {
  constructor() {
    makeAutoObservable(this);
  }

  analyzes = null;

  categories = null;

  get filteredAnalyzes() {
    return filtersStore.filterAnalyzeResults(this.analyzes);
  }

  listening = false;

  listener = null;

  start = () => {
    this.listening = true;
    this.listener = setInterval(() => this.fetch(), 1000);
  };

  stop = () => {
    this.listening = false;
    clearInterval(this.listener);
  };

  fetching = false;

  fetch = async () => {
    if (this.fetching) return;

    this.fetching = true;
    const data = await axiosMock(analyzesMock.slice(0, 2).map((v) => ({ ...v, id: Math.random() })));
    this.fetching = false;

    if (data) {
      if (!this.analyzes) this.analyzes = data;
      else this.analyzes = [...this.analyzes, ...data];
      this.genCategories();
    }
  };

  genCategories() {
    this.categories = generateCategories(this.analyzes, analyzeStore.CATEGORY_NAMES);
  }
}

export const dynamicStore = new DynamicStore();
