import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CartProducts from "../components/cartProducts";

export const productsArray = [{
    id: "123",
    name: "Mock product",
    price: 499,
    image: "mockImg.png",
    description: "Mock description",
    calorie: 300,
    slug: "mock_slug"
}];

describe('CartProducts', () => {
    it('renders a list', () => {
        render(<CartProducts products={productsArray}/>)

        const list = screen.getByRole('list');

        expect(list).toBeInTheDocument();
    })
})