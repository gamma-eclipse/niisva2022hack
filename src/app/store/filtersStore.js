import { makeAutoObservable, toJS } from 'mobx';

class FiltersStore {
  constructor() {
    makeAutoObservable(this);
  }

  //* same structure as classification
  applied = {
    purpose: '',
    name: '',
  };

  //* same structure as classification
  options = {
    purpose: ['Браузер', 'Мессенджер', 'Сетевая игра', 'Соцсеть', 'Видеохостинг'],
    name: ['Chrome', 'Firefox', 'Youtube', 'Coub', 'Telegram'],
  };

  get changed() {
    return Object.values(this.applied).some((v) => !!v);
  }

  clear = () => {
    Object.keys(this.applied).forEach((v) => {
      this.applied[v] = '';
    });
  };

  filterAnalyzeResults(analyzeResults) {
    return analyzeResults.filter((result) => {
      return Object.entries(this.applied).every(
        ([filterName, filterValue]) =>
          !filterValue || result.classification[filterName].toLowerCase() === filterValue.toLowerCase()
      );
    });
  }
}

export const filtersStore = new FiltersStore();
