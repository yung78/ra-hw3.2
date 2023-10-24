export default function Listing({ items }) {
  return (
    <div className="item-list">
      {items.map((el, index) => (
        <div key={index} className="item">
          <div className="item-image">
            <a href={el.url}>
              <img src={!('MainImage' in el)
                ? './cache.jpg'
                : ('url_570xN') in el.MainImage
                ? el.MainImage.url_570xN
                : './cache.jpg'} alt={el.title}/>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{el.title}</p>
            <p className="item-price">{
              el.currency_code === 'USD'
                ? '$' + Number(el.price).toFixed(2)
                : el.currency_code === 'EUR'
                ? '€' + Number(el.price).toFixed(2)
                :  Number(el.price).toFixed(2) + ' GBP'
            }</p>
            <p className={
              'item-quantity ' + (
                  el.quantity > 20
                  ? 'level-high'
                  : el.quantity > 10
                  ? 'level-medium'
                  : 'level-low'
                )}>{el.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

Listing.defaultProps = { items: [] };
