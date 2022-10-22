import { makeAutoObservable } from 'mobx';
import { axiosMock } from 'shared/helpers/axiosMock';
import { analyzesMock } from 'shared/mocks/analyzesMock';

import { filtersStore } from './filtersStore';

class HomeStore {
  constructor() {
    makeAutoObservable(this);
  }

  data = null;

  get filteredData() {
    return filtersStore.filterAnalyzeResults(this.data);
  }

  fetching = false;

  fetch = async () => {
    if (this.fetching) return;

    this.fetching = true;
    const data = await axiosMock(analyzesMock);
    this.fetching = false;

    if (data) {
      this.data = data;
    }
  };
}

export const homeStore = new HomeStore();
