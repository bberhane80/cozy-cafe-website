import About from './About'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Components/About',
  component: About,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
  parameters: { layout: 'fullscreen' }
}

export const Default = () => <About />