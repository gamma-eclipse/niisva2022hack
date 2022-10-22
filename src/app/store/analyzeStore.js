import { makeAutoObservable } from 'mobx';
import { axiosMock } from 'shared/helpers/axiosMock';
import { analyzesMock } from 'shared/mocks/analyzesMock';

import { filtersStore } from './filtersStore';

class AnalyzeStore {
  constructor() {
    makeAutoObservable(this);
  }

  analyzes = null;

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
    }
  };
}

export const analyzeStore = new AnalyzeStore();
