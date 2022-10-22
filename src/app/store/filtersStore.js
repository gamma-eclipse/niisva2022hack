class FiltersStore {
  // same structure as classification
  appliedFilters = {
    purpose: null,
    name: null,
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
