import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// pur data
app.get('/data/:id', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.post('/data/:id', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.put('/data/:id', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.delete('/data/:id', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// computed data
app.get('/computedData/:id', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.post('/computedData/:id', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.delete('/computedData/:id', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.put('/computedData/:id', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
