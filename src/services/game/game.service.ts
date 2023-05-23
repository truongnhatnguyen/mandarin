import { IGame } from "./game.interface";

let cacheData: IGame[];

async function getMany() {
 if (cacheData === undefined) {
  const data = await fetch("/assets/explore/datas.json").then((t) => t.json());
  cacheData = data;
 }
 return cacheData;
}

function getTopRelease() {
 const limit = 10;
 return getMany().then((data) => {
  const sorted = sortDateDesc(data);
  let _limit = sorted.length > limit ? limit : sorted.length;
  return sorted.slice(0, _limit - 1);
 });
}

function sortDateDesc(data: IGame[]) {
 return data.sort((a, b) => {
  const dataA = new Date(a.releaseDate).getTime();
  const dataB = new Date(b.releaseDate).getTime();
  return dataB - dataA;
 });
}

export const gameService = {
 getMany,
 getTopRelease,
};
