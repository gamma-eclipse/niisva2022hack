import { makeAutoObservable, toJS } from 'mobx';

class FiltersStore {
  constructor() {
    makeAutoObservable(this);
  }

  //* same structure as classification
  applied = {
    predicted_application: '',
    isvpn: '',
    predicted_category: '',
  };

  //* same structure as classification
  options = {
    predicted_application: ['vimeo', 'netflix', 'youtube', 'voip', 'skype', 'ssh', 'rdp', 'sftp', 'rsync', 'scp'],
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
    return analyzeResults.filter((result) => {
      return Object.entries(this.applied).every(
        ([filterName, filterValue]) => !filterValue || result[filterName].toLowerCase() === filterValue.toLowerCase()
      );
    });
  }
}

export const filtersStore = new FiltersStore();
