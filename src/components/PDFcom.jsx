import { useState } from "react";
import { Document, Page } from "react-pdf";
import { motion } from "framer-motion";
import pdf from "../../pdf.pdf";
function PDFcom() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  //   console.log(loading);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      {loading && (
        <motion.div
          animate={{ x: [50, 50, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.4 }}
          whileHover={{ scale: 0.9 }}
          className="flex items-center justify-center"
        >
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </motion.div>
      )}
      (
      <div className="flex items-center justify-center">
        <button
          onClick={() => setLoading(!loading)}
          className="w-1/2 mx-auto bg-slate-700 text-white rounded-lg font-bold"
        >
          {loading ? "hide" : "show pdf"}
        </button>
      </div>
      )
    </>
  );
}

export default PDFcom;
