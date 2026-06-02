import Menu from './Menu'

export default {
  title: 'Components/Menu',
  component: Menu,
  parameters: { layout: 'fullscreen' }
}

export const Default = () => <Menu />

export const SingleCategory = () => (
  <Menu overrideItems={[
    {
      category: 'Coffee',
      items: [
        { name: 'Espresso', description: 'Rich and bold.', price: '$3.50' },
        { name: 'Cappuccino', description: 'Espresso with steamed milk.', price: '$4.75' },
      ]
    }
  ]} />
)