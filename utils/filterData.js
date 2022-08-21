
export const filterData = [
  {
    items: [
      { name: "Buy", value: "for-sale" },
      //{ name: "Rent", value: "for-rent" },
    ],

    placeholder: "Purpose",
    queryName: "purpose",
  },
  {
    items: [
      { name: "10,000", value: "10000" },
      { name: "20,000", value: "20000" },
      { name: "30,000", value: "30000" },
      { name: "40,000", value: "40000" },
      { name: "50,000", value: "50000" },
      { name: "60,000", value: "60000" },
      { name: "85,000", value: "85000" },
      { name: "110,000", value: "110000" },
      { name: "135,000", value: "135000" },
      { name: "160,000", value: "160000" },
      { name: "185,000", value: "185000" },
      { name: "200,000", value: "200000" },
      { name: "300,000", value: "300000" },
      { name: "400,000", value: "400000" },
      { name: "500,000", value: "500000" },
      { name: "600,000", value: "600000" },
      { name: "700,000", value: "700000" },
      { name: "800,000", value: "800000" },
      { name: "900,000", value: "900000" },
      { name: "1,000,000", value: "1000000" },
    ],
    placeholder: "Minimum Price",
    queryName: "price_min",
  },
  {
    items: [
      { name: "10,000", value: "10000" },
      { name: "20,000", value: "20000" },
      { name: "30,000", value: "30000" },
      { name: "40,000", value: "40000" },
      { name: "50,000", value: "50000" },
      { name: "60,000", value: "60000" },
      { name: "85,000", value: "85000" },
      { name: "110,000", value: "110000" },
      { name: "135,000", value: "135000" },
      { name: "160,000", value: "160000" },
      { name: "185,000", value: "185000" },
      { name: "200,000", value: "200000" },
      { name: "300,000", value: "300000" },
      { name: "400,000", value: "400000" },
      { name: "500,000", value: "500000" },
      { name: "600,000", value: "600000" },
      { name: "700,000", value: "700000" },
      { name: "800,000", value: "800000" },
      { name: "900,000", value: "900000" },
      { name: "1,000,000", value: "1000000" },
      { name: "1,500,000", value: "1500000" },
      { name: "2,000,000", value: "2000000" },
    ],
    placeholder: "Maximum Price",
    queryName: "price_max",
  },
  {
    items: [
      { name: "Lowest Price", value: "price_low" },
      { name: "Highest Price", value: "price_high" },
      { name: "Newest", value: "newest" },
      { name: "Has Photos", value: "photos" },
    ],
    placeholder: "Sort",
    queryName: "sort",
  },

  {
    items: [
      { name: "1,000", value: "1000" },
      { name: "2,000", value: "2000" },
      { name: "3,000", value: "3000" },
      { name: "4,000", value: "4000" },
      { name: "5,000", value: "5000" },
      { name: "10,000", value: "10000" },
      { name: "20,000", value: "20000" },
    ],
    placeholder: "Min Area(sqft)",
    queryName: "sqft_min",
  },
  {
    items: [
      { name: "1000", value: "1000" },
      { name: "2000", value: "2000" },
      { name: "3000", value: "3000" },
      { name: "4000", value: "4000" },
      { name: "5000", value: "5000" },
      { name: "10000", value: "10000" },
      { name: "20000", value: "20000" },
    ],
    placeholder: "Max Area(sqft)",
    queryName: "sqft_Max",
  },
  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Bedrooms",
    queryName: "beds_min",
  },
  {
    items: [
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
    placeholder: "Bathrooms",
    queryName: "baths_min",
  },
  {
    items: [
      { name: "10", value: "10" },
      { name: "20", value: "20" },
      { name: "30", value: "30" },
      { name: "40", value: "40" },
      { name: "50", value: "50" },
      { name: "60", value: "60" },
      { name: "70", value: "70" },
      { name: "80", value: "80" },
      { name: "90", value: "90" },
      { name: "100", value: "100" },
    ],
    placeholder: "Number of Listings",
    queryName: "limit",
  },
];

export const getFilterValues = (filterValues) => {

  const { purpose, price_min, price_max, sort, sqft_min, sqft_max, beds_min, baths_min, limit} =
    filterValues;

  const values = [
    {
      name: "purpose",
      value: purpose,
    },
    {
      name: "price_min",
      value: price_min,
    },
    {
      name: "price_max",
      value: price_max,
    },
    {
      name: "sort",
      value: sort,
    },
    {
      name: "sqft_min",
      value: sqft_min,
    },
    {
      name: "sqft_max",
      value: sqft_max,
    },
    {
      name: "beds_min",
      value: beds_min,
    },
    {
      name: "baths_min",
      value: baths_min,
    },
    {
      name: "limit",
      value: limit,
    },
  ];
  return values;
};
