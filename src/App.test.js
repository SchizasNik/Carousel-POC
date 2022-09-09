import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('renders basic components', async () => {
  render(<App />);
  const titleElement = await screen.findByTestId('title');
  expect(titleElement).toBeInTheDocument();
  const subtitleElement = await screen.findByTestId('subtitle');
  expect(subtitleElement).toBeInTheDocument();
  const carouselElement = await screen.findByTestId('carousel');
  expect(carouselElement).toBeInTheDocument();
});

test('carousel slides - passes but shouldnt', async () => {
  render(<App />);
  const slide1 = await screen.findByTestId('slide-1');
  expect(slide1).toBeVisible();
  const slide2 = await screen.findByTestId('slide-2');
  expect(slide2).toBeVisible();
  const slide3 = await screen.findByTestId('slide-3');
  expect(slide3).toBeVisible();
  const slide4 = await screen.findByTestId('slide-4');
  expect(slide4).toBeVisible();
  const slide5 = await screen.findByTestId('slide-5');
  expect(slide5).toBeVisible();
  const slide6 = await screen.findByTestId('slide-6');
  expect(slide6).toBeVisible();
  const slide7 = await screen.findByTestId('slide-7');
  expect(slide7).toBeVisible();
  const slide8 = await screen.findByTestId('slide-8');
  expect(slide8).toBeVisible();
});
