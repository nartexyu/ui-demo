import { atom } from "jotai";

const hawaii = ['hawaii_1', 'hawaii_2', 'hawaii_3', 'hawaii_4'];
const japan = ['japan_1', 'japan_2', 'japan_3', 'japan_4', 'japan_5', 'japan_6'];
const europe = ['europe_1', 'europe_2', 'europe_3', 'europe_4'];
const landscape = ['landscape_1', 'landscape_2', 'landscape_3', 'landscape_4', 'landscape_5', 'japan_3']; // Another book's pictures

export const pageAtom = atom(0);

const createPages = (pictures) => {
  const pages = [
    {
      front: "book-cover",
      back: pictures[0],
    },
  ];
  for (let i = 1; i < pictures.length - 1; i += 2) {
    pages.push({
      front: pictures[i % pictures.length],
      back: pictures[(i + 1) % pictures.length],
    });
  }
  pages.push({
    front: pictures[pictures.length - 1],
    back: "book-back",
  });
  return pages;
};

const japanPages = createPages(japan);
const hawaiiPages = createPages(hawaii);
const europePages = createPages(europe);
const landscapePages = createPages(landscape);

export const books = [
  { title: "Japan", pages: japanPages },
  { title: "Hawaii", pages: hawaiiPages },
  { title: "Europe", pages: europePages },
  { title: "Landscape", pages: landscapePages },
  // Add more books as needed
];
