import { within } from '@testing-library/dom'
import { ComponentA, tagName } from './component-a'

describe('ComponentA', () => {
  it('Renders ComponentA', () => {
    if (!customElements.get(tagName)) {
      window.customElements.define(tagName, ComponentA)
    }
    let element = document.createElement(tagName)
    document.body.appendChild(element)

    const { getByTestId } = within(element.shadowRoot)
    element = getByTestId('componentA')
    expect(element).toBeTruthy
  })
})

