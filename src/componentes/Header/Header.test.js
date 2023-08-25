import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

test('renders header with logo and navigation links', () => {
  const { getByText } = render(<Header />);
  const logoElement = getByText('PLANTAS DE HOGAR');
  expect(logoElement).toBeInTheDocument();

  const linkElements = getByText(/Tienda|Servicios|Consejos|Sobre nosotros/i);
  expect(linkElements).toBeInTheDocument();
});
