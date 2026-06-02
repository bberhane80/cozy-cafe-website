import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Components/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
  parameters: {
    layout: 'fullscreen'
  }
}

export const Default = () => <Navbar />