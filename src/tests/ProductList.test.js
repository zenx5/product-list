import { render, screen } from '@testing-library/react';
import { ProductList } from '../pages';

test('render barnav', () => {
    // check if barnav is rendered
})

test('barnav user email', () => {
    // check if user-email is show
})

test('render sidebar', () => {
    // check if sidebar is rendered
})

test('render table', () => {
    // check if table is rendered
    render(<ProductList />);
    const table = screen.getByTestId('table-product-list')
    expect(table).toBeInTheDocument()
});

test('table empty', () => {
    // check if table is empty
    render(<ProductList />);
    const contentTable = screen.getByTestId('table-content')
    expect(contentTable).toBeEmptyDOMElement()
});

test('render row', () => {
    // check each cell in the row
});

test('input search', () => {
    // check if search is running
});

test('breadcrumbs is', () => {
    // check if breadcrumbs render
})
