import { axiosMock } from 'helpers/axiosMock';
import { makeAutoObservable } from 'mobx';
import { dataMock } from 'mocks/dataMock';

class HomeStore {
  constructor() {
    makeAutoObservable(this);
  }

  data = null;

  fetching = false;

  fetch = async () => {
    console.log(this);
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
