import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import CartLink from "../components/cartLink";

describe('CartLink', () => {
    it('renders an anchor', () => {
        render(<CartLink />)

        const heading = screen.getByRole('link', { href: '/i' });

        expect(heading).toBeInTheDocument()
    })
})