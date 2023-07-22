import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { Sample } from './index'

describe('@atoms Sample', () => {
  beforeEach(() => {
    //
  })

  afterEach(() => {
    cleanup()
  })

  it('renders default text', () => {
    render(<Sample />)
    const text = screen.getByText(/Sample component/i)
    expect(text).toBeTruthy()
  })

  describe('props', () => {
    describe.each([
      { props: { text: 'Test label' }, expected: 'Test label' },
      { props: { text: 'abcd' }, expected: 'abcd' },
      { props: {}, expected: 'Sample component' },
    ])(`Text $props.text, expected: $expected`, (input) => {
      it('props check', () => {
        const component = render(<Sample {...input.props} />)

        const text = component.findByText(input.expected)
        expect(text).toBeTruthy()
      })
    })
  })
})
