import { readFileSync } from 'fs';

import Papa from 'papaparse';

export const parseStream = (readableStream: any) => {
  return Papa.parse(readableStream, {
    step: (results: Papa.ParseStepResult<any>, parser: Papa.Parser) => {},
    complete: (results: Papa.ParseResult<any>, file: any) => {},
    error: (error: Error, file: any) => {},
    worker: true,
  });
};

export const parse = (csvPath: string) => {
  Papa.parse(readFileSync(csvPath).toString(), {
    skipEmptyLines: true,
    step: (results: { data: string[] }, papa: any) => {},
  });
};
