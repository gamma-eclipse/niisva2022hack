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
    application: ['vimeo', 'netflix', 'youtube', 'voip', 'skype', 'ssh', 'rdp', 'sftp', 'rsync', 'scp'],
    isvpn: ['vpn', 'nonvpn'],
    predicted_category: ['streaming', 'voip', 'chat', 'command', 'terminal'],
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
    // console.log(Object.entries(this.applied));
    // return analyzeResults;
    return analyzeResults.filter((result) => {
      return Object.entries(this.applied).every(
        ([filterName, filterValue]) => !filterValue || result[filterName].toLowerCase() === filterValue.toLowerCase()
      );
    });
  }
}

export const filtersStore = new FiltersStore();
