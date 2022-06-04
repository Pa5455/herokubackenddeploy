export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "$2a$10$4UY1KoVejIZjmPWqOhqfjeHmxT5f1hSDwyCceet.Hceo97EMnLcwy",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "$2a$10$D3TWK8MSAh63Lhk4gIFSJ.ekM368J88qJRUYSbuBfzffex6B0dFwK",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "$2a$10$uqnPlgyVjBEOtcgMhn/WRO3FwW4T9gX36tTB4RqpGeB/LkCR3YQuO",
    },
  },
  products: {
    _model: "Product",
    RoundUpGold: {
      brandName: "RoundUp",
      typeName: "Gold",
      area: "Chemicals",
    },
    RoundUpSilver: {
      brandName: "RoundUp",
      typeName: "Silver",
      area: "Chemicals",
    },
  },
  dosage: {
    _model: "Dose",
    one: {
      amount: 40,
      method: "drum",
      lat: "52.160858",
      lng: "-7.152420",
      donor: "->users.bart",
      product: "->products.RoundUpSilver",
    },
    two: {
      amount: 90,
      method: "bottle",
      lat: "52.149220",
      lng: "-6.994620",
      donor: "->users.marge",
      product: "->products.RoundUpGold",
    },
    three: {
      amount: 430,
      method: "drum",
      lat: "52.161290",
      lng: "-7.231540",
      donor: "->users.homer",
      product: "->products.RoundUpSilver",
    },
  },
};
