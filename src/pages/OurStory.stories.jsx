import OurStory from './OurStory'
import { BrowserRouter } from 'react-router-dom'

export default {
  title: 'Pages/OurStory',
  component: OurStory,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
  parameters: { layout: 'fullscreen' }
}

export const Default = () => <OurStory />