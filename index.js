module.export = () => {
  return {
    name: 'Miguel Rangel',
    username: 'denyncrawford',
    career: 'Full Stack Web Developer',
    info: {
      profiles: { 
      github: 'denyncrawford',
      npmjs: 'denyn_crawford',
      instagram: 'samaels_bitch'
      },
      contact: {
        email: 'denyncrawford@crawford.ml',
        telegram: '@samaels_bitch',
        bussiness: 'bussiness@crawford.ml'
      },
      finance: {
      	bitcoin: '39ik7oyYvmiMeTXTscY3bb9rUFMHdjf5pd',
        paypal: 'https://paypal.me/DENYNCRAWFORD',
        buyMeACoffee: 'https://www.buymeacoffee.com/denyncrawford'
      }
    },
    support(way) {
    	if (!way) return this.info.finance;
      return this.info.finance[way]
    },
    contact(way) {
      if (!way) return this.info.contact
      return this.info.contact[way]
    },
    at(profile) {
      if (!profile) return this.info.profiles;
      return this.info.profiles[profile] || `Ups! I'm not at ${profile}, try another platform.`
    }
  }
}
