import './Menu.css'

const menuItems = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', description: 'Rich and bold, straight from the source.', price: '$3.50' },
      { name: 'Cappuccino', description: 'Espresso with steamed milk and a thick layer of foam.', price: '$4.75' },
      { name: 'Cold Brew', description: 'Slow-steeped for 12 hours, served over ice.', price: '$5.00' },
    ]
  },
  {
    category: 'Tea',
    items: [
      { name: 'Chai Latte', description: 'Spiced black tea with steamed oat milk.', price: '$4.50' },
      { name: 'Matcha Latte', description: 'Ceremonial grade matcha, smooth and earthy.', price: '$5.25' },
      { name: 'Earl Grey', description: 'Classic bergamot black tea, served hot or iced.', price: '$3.75' },
    ]
  },
  {
    category: 'Pastries',
    items: [
      { name: 'Butter Croissant', description: 'Flaky, golden, baked fresh every morning.', price: '$3.50' },
      { name: 'Banana Bread', description: 'Moist and warmly spiced, a house favorite.', price: '$4.00' },
      { name: 'Almond Tart', description: 'Buttery shell filled with almond cream.', price: '$4.50' },
    ]
  }
]

function Menu() {
  return (
    <section className="menu" id="menu">
      <div className="menu-header">
        <p className="menu-label">What We Offer</p>
        <h2 className="menu-title">Our Menu</h2>
      </div>

      <div className="menu-grid">
        {menuItems.map((group) => (
          <div className="menu-category" key={group.category}>
            <h3 className="menu-category-title">{group.category}</h3>
            <div className="menu-items">
              {group.items.map((item) => (
                <div className="menu-item" key={item.name}>
                  <div className="menu-item-top">
                    <span className="menu-item-name">{item.name}</span>
                    <span className="menu-item-price">{item.price}</span>
                  </div>
                  <p className="menu-item-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu