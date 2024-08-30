import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { pageAtom } from "../../atoms/atoms";
import { Page } from "./Page";

// Book component to render all the pages in a book
export const Book = ({ pages, ...props }) => {
  const [page] = useAtom(pageAtom); // Current page index
  const [delayedPage, setDelayedPage] = useState(page); // State to handle smooth page transitions

  // Handles the smooth transition between pages
  useEffect(() => {
    let timeout;
    const goToPage = () => {
      setDelayedPage((prevPage) => {
        if (page === prevPage) {
          return prevPage;
        } else {
          timeout = setTimeout(
            goToPage,
            Math.abs(page - prevPage) > 2 ? 50 : 150
          );
          return page > prevPage ? prevPage + 1 : prevPage - 1;
        }
      });
    };
    goToPage();
    return () => {
      clearTimeout(timeout); // Clean up the timeout on component unmount
    };
  }, [page]);

  return (
    <group {...props} rotation-y={-Math.PI / 2}>
      {pages.map((pageData, index) => (
        <Page
          key={index}
          page={delayedPage} // Current delayed page index for smooth transitions
          number={index} // Page number
          opened={delayedPage > index} // Boolean to check if the page is opened
          bookClosed={delayedPage === 0 || delayedPage === pages.length} // Check if the book is closed
          totalPages={pages.length} // Total number of pages in the book
          {...pageData} // Spread the remaining page data
        />
      ))}
    </group>
  );
};
