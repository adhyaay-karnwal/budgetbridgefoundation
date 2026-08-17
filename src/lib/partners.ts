export type PartnerCountry = {
  id: string;
  name: string;
  /** Country centroid as [latitude, longitude] for the globe. */
  location: [number, number];
};

/**
 * Partner and collaborator countries from Budget Bridge's partnership list.
 * Names follow the source list; coordinates are country centroids.
 */
export const PARTNER_COUNTRIES: PartnerCountry[] = [
  { id: "afghanistan", name: "Afghanistan", location: [33.94, 67.71] },
  { id: "algeria", name: "Algeria", location: [28.03, 1.66] },
  { id: "angola", name: "Angola", location: [-11.2, 17.87] },
  { id: "argentina", name: "Argentina", location: [-38.42, -63.62] },
  { id: "armenia", name: "Armenia", location: [40.07, 45.04] },
  { id: "australia", name: "Australia", location: [-25.27, 133.78] },
  { id: "azerbaijan", name: "Azerbaijan", location: [40.14, 47.58] },
  { id: "bahrain", name: "Bahrain", location: [26.07, 50.56] },
  { id: "bangladesh", name: "Bangladesh", location: [23.68, 90.36] },
  { id: "benin", name: "Benin", location: [9.31, 2.32] },
  { id: "bolivia", name: "Bolivia", location: [-16.29, -63.59] },
  {
    id: "bosnia-and-herzegovina",
    name: "Bosnia and Herzegovina",
    location: [43.92, 17.68],
  },
  { id: "botswana", name: "Botswana", location: [-22.33, 24.68] },
  { id: "brazil", name: "Brazil", location: [-14.24, -51.93] },
  { id: "cambodia", name: "Cambodia", location: [12.57, 104.99] },
  { id: "cameroon", name: "Cameroon", location: [7.37, 12.35] },
  { id: "canada", name: "Canada", location: [56.13, -106.35] },
  { id: "chile", name: "Chile", location: [-35.68, -71.54] },
  { id: "china", name: "China", location: [35.86, 104.2] },
  { id: "colombia", name: "Colombia", location: [4.57, -74.3] },
  { id: "cote-divoire", name: "Cote d'Ivoire", location: [7.54, -5.55] },
  { id: "cuba", name: "Cuba", location: [21.52, -77.78] },
  { id: "cyprus", name: "Cyprus", location: [35.13, 33.43] },
  { id: "denmark", name: "Denmark", location: [56.26, 9.5] },
  {
    id: "dominican-republic",
    name: "Dominican Republic",
    location: [18.74, -70.16],
  },
  { id: "ecuador", name: "Ecuador", location: [-1.83, -78.18] },
  { id: "egypt", name: "Egypt", location: [26.82, 30.8] },
  { id: "estonia", name: "Estonia", location: [58.6, 25.01] },
  { id: "ethiopia", name: "Ethiopia", location: [9.15, 40.49] },
  { id: "finland", name: "Finland", location: [61.92, 25.75] },
  { id: "france", name: "France", location: [46.23, 2.21] },
  { id: "georgia", name: "Georgia", location: [42.32, 43.36] },
  { id: "germany", name: "Germany", location: [51.17, 10.45] },
  { id: "ghana", name: "Ghana", location: [7.95, -1.02] },
  { id: "greece", name: "Greece", location: [39.07, 21.82] },
  { id: "haiti", name: "Haiti", location: [18.97, -72.29] },
  { id: "hong-kong", name: "Hong Kong", location: [22.4, 114.11] },
  { id: "india", name: "India", location: [20.59, 78.96] },
  { id: "indonesia", name: "Indonesia", location: [-0.79, 113.92] },
  { id: "iran", name: "Iran", location: [32.43, 53.69] },
  { id: "iraq", name: "Iraq", location: [33.22, 43.68] },
  { id: "ireland", name: "Ireland", location: [53.14, -7.69] },
  { id: "israel", name: "Israel", location: [31.05, 34.85] },
  { id: "italy", name: "Italy", location: [41.87, 12.57] },
  { id: "jamaica", name: "Jamaica", location: [18.11, -77.3] },
  { id: "japan", name: "Japan", location: [36.2, 138.25] },
  { id: "kazakhstan", name: "Kazakhstan", location: [48.02, 66.92] },
  { id: "kenya", name: "Kenya", location: [-0.02, 37.91] },
  { id: "kyrgyzstan", name: "Kyrgyzstan", location: [41.2, 74.77] },
  { id: "laos", name: "Laos", location: [19.86, 102.5] },
  { id: "latvia", name: "Latvia", location: [56.88, 24.6] },
  { id: "lebanon", name: "Lebanon", location: [33.85, 35.86] },
  { id: "liberia", name: "Liberia", location: [6.43, -9.43] },
  { id: "lithuania", name: "Lithuania", location: [55.17, 23.88] },
  { id: "luxembourg", name: "Luxembourg", location: [49.82, 6.13] },
  { id: "macedonia", name: "Macedonia", location: [41.61, 21.75] },
  { id: "malawi", name: "Malawi", location: [-13.25, 34.3] },
  { id: "malaysia", name: "Malaysia", location: [4.21, 101.98] },
  { id: "malta", name: "Malta", location: [35.94, 14.38] },
  { id: "mexico", name: "Mexico", location: [23.63, -102.55] },
  { id: "monaco", name: "Monaco", location: [43.74, 7.42] },
  { id: "mongolia", name: "Mongolia", location: [46.86, 103.85] },
  { id: "montenegro", name: "Montenegro", location: [42.71, 19.37] },
  { id: "morocco", name: "Morocco", location: [31.79, -7.09] },
  { id: "myanmar", name: "Myanmar", location: [21.91, 95.96] },
  { id: "namibia", name: "Namibia", location: [-22.96, 18.49] },
  { id: "nepal", name: "Nepal", location: [28.39, 84.12] },
  { id: "netherlands", name: "Netherlands", location: [52.13, 5.29] },
  { id: "new-zealand", name: "New Zealand", location: [-40.9, 174.89] },
  { id: "nigeria", name: "Nigeria", location: [9.08, 8.68] },
  { id: "panama", name: "Panama", location: [8.54, -80.78] },
  { id: "paraguay", name: "Paraguay", location: [-23.44, -58.44] },
  { id: "peru", name: "Peru", location: [-9.19, -75.02] },
  { id: "philippines", name: "Philippines", location: [12.88, 121.77] },
  { id: "poland", name: "Poland", location: [51.92, 19.15] },
  { id: "portugal", name: "Portugal", location: [39.4, -8.22] },
  { id: "qatar", name: "Qatar", location: [25.35, 51.18] },
  { id: "romania", name: "Romania", location: [45.94, 24.97] },
  { id: "russia", name: "Russia", location: [61.52, 105.32] },
  { id: "rwanda", name: "Rwanda", location: [-1.94, 29.87] },
  { id: "saudi-arabia", name: "Saudi Arabia", location: [23.89, 45.08] },
  { id: "senegal", name: "Senegal", location: [14.5, -14.45] },
  { id: "serbia", name: "Serbia", location: [44.02, 21.01] },
  { id: "singapore", name: "Singapore", location: [1.35, 103.82] },
  { id: "south-africa", name: "South Africa", location: [-30.56, 22.94] },
  { id: "south-korea", name: "South Korea", location: [35.91, 127.77] },
  { id: "spain", name: "Spain", location: [40.46, -3.75] },
  { id: "sri-lanka", name: "Sri Lanka", location: [7.87, 80.77] },
  { id: "switzerland", name: "Switzerland", location: [46.82, 8.23] },
  { id: "syria", name: "Syria", location: [34.8, 38.0] },
  { id: "tajikistan", name: "Tajikistan", location: [38.86, 71.28] },
  { id: "thailand", name: "Thailand", location: [15.87, 100.99] },
  { id: "timor-leste", name: "Timor-Leste", location: [-8.87, 125.73] },
  {
    id: "trinidad-and-tobago",
    name: "Trinidad & Tobago",
    location: [10.69, -61.22],
  },
  { id: "tunisia", name: "Tunisia", location: [33.89, 9.54] },
  { id: "turkey", name: "Turkey", location: [38.96, 35.24] },
  { id: "uae", name: "UAE", location: [23.42, 53.85] },
  { id: "uganda", name: "Uganda", location: [1.37, 32.29] },
  { id: "uk", name: "UK", location: [55.38, -3.44] },
  { id: "ukraine", name: "Ukraine", location: [48.38, 31.17] },
  { id: "usa", name: "USA", location: [37.09, -95.71] },
  { id: "uzbekistan", name: "Uzbekistan", location: [41.38, 64.59] },
  { id: "vietnam", name: "Vietnam", location: [14.06, 108.28] },
];

export const PARTNER_COUNTRY_COUNT = PARTNER_COUNTRIES.length;

export function partnerCountriesByLetter(): [string, PartnerCountry[]][] {
  const groups = new Map<string, PartnerCountry[]>();

  for (const country of PARTNER_COUNTRIES) {
    const letter = country.name[0]?.toUpperCase();
    if (!letter) continue;
    const list = groups.get(letter);
    if (list) {
      list.push(country);
    } else {
      groups.set(letter, [country]);
    }
  }

  return [...groups.entries()];
}
