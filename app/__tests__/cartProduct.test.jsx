import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import CartProduct from "../components/cartProduct";

describe('CartProduct', () => {
    it('renders a list item', () => {
        render(<CartProduct />)

        const listItem = screen.getByRole('listitem')

        expect(listItem).toBeInTheDocument()
    })
})