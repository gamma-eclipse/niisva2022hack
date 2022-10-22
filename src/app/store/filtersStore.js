import { makeAutoObservable } from 'mobx';

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

  filterAnalyzeResults(analyzeResults) {
    return analyzeResults.filter((result) => {
      return Object.entries(this.appliedFilters).every(
        ([filterName, filterValue]) => !filterValue || result.classification[filterName] === filterValue
      );
    });
  }
}

export const filtersStore = new FiltersStore();
