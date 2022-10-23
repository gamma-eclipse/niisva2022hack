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

  HEADERS = ['id', 'traffic', 'posix', 'application', 'isvpn', 'predicted_category'];

  fetch = async (file) => {
    if (this.fetching) return;

    this.fetching = true;
    const data = await axiosMock(analyzesMock);

    Papa.parse(file, {
      complete: (results) => {
        console.log('Finished:', results.data);

        const body = results.data.slice(1, results.data.length);

        const mapped = body.map((v) => {
          console.log(v);
          return {
            id: v[0],
            traffic: v[1],
            posix: v[2],
            // category: v[4],
            application: v[5],
            isvpn: v[6],
            predicted_category: v[7],
          };
        });

        this.fetching = false;
        this.analyzes = mapped.slice(0, 50);
      },
    });
  };

  genCategories() {
    this.categories = generateCategories(this.analyzes, this.CATEGORY_NAMES);
  }
}

export const analyzeStore = new AnalyzeStore();
