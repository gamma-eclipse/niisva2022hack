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

  analyzes = null;

  categories = null;

  get filteredAnalyzes() {
    return filtersStore.filterAnalyzeResults(this.analyzes);
    // return this.analyzes;
  }

  fetching = false;

  total = 0;

  totalTraffic = 0;

  HEADERS = ['id', 'traffic', 'posix', 'source', 'destination', 'predicted_application', 'isvpn', 'predicted_category'];

  CATEGORY_NAMES = ['predicted_application', 'isvpn', 'predicted_category'];

  // CATEGORY_NAMES_MAP = {
  //   application: 'Название источника',
  //   isvpn: 'Назначение',
  // };

  fetch = async (file) => {
    if (this.fetching) return;

    this.fetching = true;
    const data = await axiosMock(analyzesMock);

    Papa.parse(file, {
      complete: (results) => {
        const body = results.data.slice(1, results.data.length - 1);

        this.total = body.length;

        let traffic = 0;
        // const mapped = body.map((v) => {
        //   traffic += parseInt(v[1], 10);
        //   return {
        //     id: v[0],
        //     traffic: v[1],
        //     posix: v[2],
        //     application: v[5],
        //     isvpn: v[6],
        //     predicted_category: v[7],
        //   };
        // });'

        console.log(body);

        const mapped = body.map((v) => {
          traffic += parseInt(v[2], 10);
          return {
            id: v[1],
            traffic: v[2],
            posix: v[3],
            source: `${v[4]}:${v[5]}`,
            destination: `${v[6]}:${v[7]}`,
            predicted_application: v[8],
            isvpn: v[9],
            predicted_category: v[10],
          };
        });

        console.log(mapped);

        this.totalTraffic = traffic;

        this.fetching = false;
        this.analyzes = mapped.slice(0, 500);
        this.genCategories();
      },
    });
  };

  genCategories() {
    this.categories = generateCategories(this.analyzes, this.CATEGORY_NAMES);
  }
}

export const analyzeStore = new AnalyzeStore();
