import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, beforeEach, expect } from 'vitest'
import { Sample } from './index'

describe('@atoms Sample', () => {
  beforeEach(() => {
    //
  })

  it('renders default text', () => {
    render(<Sample />)
    const text = screen.getByText(/Sample component/i)
    expect(text).toBeInTheDocument()
  })

  describe('props', () => {
    describe.each([
      { props: { text: 'Test label' }, expected: 'Test label' },
      { props: { text: 'abcd' }, expected: 'abcd' },
      { props: {}, expected: 'Sample component' },
    ])(`Text $props.text, expected: $expected`, (input) => {
      it('props check', async () => {
        const component = render(<Sample {...input.props} />)

        const div = await component.findByText(input.expected)
        expect(div).toBeTruthy()
      })
    })
  })

  it('test http', async () => {
    const component = render(<Sample />)
    const div = component.getByTestId('http-mock-response')
    expect(div).toBeInTheDocument()

    expect(div).not.toHaveTextContent('Mock_service_worker_response_todo_2')

    await waitFor(() => {
      expect(div).toHaveTextContent('Mock_service_worker_response_todo_2')
    })
  })
})
