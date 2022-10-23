import { makeAutoObservable, toJS } from 'mobx';
import * as Papa from 'papaparse';
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
    // return this.analyzes;
  }

  fetching = false;

  total = 0;

  totalTraffic = 0;

  HEADERS = ['id', 'traffic', 'posix', 'application', 'isvpn', 'predicted_category'];

  fetch = async (file) => {
    if (this.fetching) return;

    this.fetching = true;
    const data = await axiosMock(analyzesMock);

    Papa.parse(file, {
      complete: (results) => {
        console.log('Finished:', results.data);

        const body = results.data.slice(1, results.data.length - 1);

        this.total = body.length;

        let traffic = 0;
        const mapped = body.map((v) => {
          traffic += parseInt(v[1], 10);
          return {
            id: v[0],
            traffic: v[1],
            posix: v[2],
            application: v[5],
            isvpn: v[6],
            predicted_category: v[7],
          };
        });

        this.totalTraffic = traffic;

        this.fetching = false;
        this.analyzes = mapped.slice(0, 500);
      },
    });
  };

  genCategories() {
    this.categories = generateCategories(this.analyzes, this.CATEGORY_NAMES);
  }
}

export const analyzeStore = new AnalyzeStore();
