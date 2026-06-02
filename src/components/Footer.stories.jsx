import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Components/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
  parameters: { layout: 'fullscreen' }
}

export const Default = () => <Footer />