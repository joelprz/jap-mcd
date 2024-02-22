import { render } from '@testing-library/react'

import CartLink from "../components/cartLink";

it('renders CartLink unchanged', () => {
    const { cartLink } = render(<CartLink />)
    expect(cartLink).toMatchSnapshot()
})