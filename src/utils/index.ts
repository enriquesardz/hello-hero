export const CONST_TYPES_COLORS: any = {
  normal: "#BCBCAE",
  grass: "#8CD751",
  fire: "#F75343",
  water: "#56AEFF",
  fighting: "#A85644",
  flying: "#79A4FF",
  poison: "#AB5DA2",
  ground: "#EFCE56",
  rock: "#CDBD72",
  bug: "#C3D21F",
  ghost: "#7974D6",
  electric: "#FDE53F",
  psychic: "#FA65B5",
  ice: "#96F1FF",
  dragon: "#8975FF",
  dark: "#8F6956",
  steel: "#C4C2DB",
  fairy: "#FAADFF",
};
// export function mapTypeToProperties(type) {
//   switch (type) {
//   }
// }
export function mapTypeToColor(type: string) {
  return CONST_TYPES_COLORS[type];
}
