import { makeAutoObservable } from 'mobx';
import { axiosMock } from 'shared/helpers/axiosMock';
import { dataMock } from 'shared/mocks/dataMock';

class HomeStore {
  constructor() {
    makeAutoObservable(this);
  }

  data = null;

  fetching = false;

  fetch = async () => {
    if (this.fetching) return;

    this.fetching = true;
    const data = await axiosMock(dataMock);
    this.fetching = false;

    if (data) {
      this.data = data;
    }
  };
}

export const homeStore = new HomeStore();
