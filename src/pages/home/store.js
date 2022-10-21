import { axiosMock } from 'helpers/axiosMock';
import { makeAutoObservable } from 'mobx';
import { dataMock } from 'mocks/dataMock';

export const homeStore = makeAutoObservable({
  data: null,
  fetched: false,
  fetching: false,

  async fetch() {
    if (this.fetched || this.fetching) return;

    this.fetching = true;
    const data = await axiosMock(dataMock);
    this.fetching = false;

    if (data) {
      this.data = data;
      this.fetched = true;
    }
  },
});
