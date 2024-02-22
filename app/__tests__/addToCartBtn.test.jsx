import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import AddToCartButton from "../components/addToCartBtn";

describe('AddToCartButton', () => {
    it('renders a button', () => {
        render(<AddToCartButton productId={"123"} productName={"Add to cart"} />)

        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })
})