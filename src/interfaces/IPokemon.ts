export default interface IPokemon {
  id: number;
  name: string;
  types: string[];
  description: string;
  image: string;
  imageShiny: string;
  imageFemale: string;
  imageFemaleShiny: string;
  stats:
    | {
        type: string;
        base: number;
        effot: number;
      }
    | any;
}
