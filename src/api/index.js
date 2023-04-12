export default {
  getAllPackages() {
    return fetch(`https://data.jsdelivr.com/v1/stats/packages`);
  },
  getPackageInfo(info) {
    return fetch(`https://data.jsdelivr.com/v1/package/${info.type}/${info.name}`);
  }
};
