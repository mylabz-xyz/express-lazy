import Papa from 'papaparse';

export const parseFile = (readableStream: any) => {
  return Papa.parse(readableStream, {
    step: (results: Papa.ParseStepResult<any>, parser: Papa.Parser) => {},
    complete: (results: Papa.ParseResult<any>, file: any) => {},
    error: (error: Error, file: any) => {},
    worker: true,
  });
};
