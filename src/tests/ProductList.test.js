import { render, screen } from '@testing-library/react';
import { ProductList } from '../pages';



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
    expect(contentTable).not.toBeEmptyDOMElement()
});

test('render row', () => {
    // check each cell in the row
    let RowsInDocument = false
    render(<ProductList />)
    const contentTable = screen.getByTestId('table-content')
    for( let i = 0; i < contentTable.childElementCount; i++ ){
        RowsInDocument = RowsInDocument ||  !!contentTable.children[i]
    }
    expect(RowsInDocument).toBe(true)
});

test('input search', () => {
    // check if search is running
    render(<ProductList />)
    const search = screen.getByTestId('search')
    
});

test('breadcrumbs is', () => {
    // check if breadcrumbs render
    render(<ProductList />)
    const breadcrumbs = screen.getByTestId('breadcrumb')
    expect(breadcrumbs).toHaveTextContent('Productos')
})
