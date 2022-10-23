import { makeAutoObservable, toJS } from 'mobx';

class FiltersStore {
  constructor() {
    makeAutoObservable(this);
  }

  //* same structure as classification
  applied = {
    application: '',
    isvpn: '',
    predicted_category: '',
  };

  //* same structure as classification
  options = {
    application: ['netflix', 'skype', 'ssh', 'youtube'],
    isvpn: ['vpn', 'novpn'],
    predicted_category: ['Streaming', 'Chat', 'Command and control'],
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
        ([filterName, filterValue]) => !filterValue || result[filterName].toLowerCase() === filterValue.toLowerCase()
      );
    });
  }
}

export const filtersStore = new FiltersStore();
