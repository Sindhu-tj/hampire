<<<<<<< HEAD
type Item = {
  name: string;
  image: string;
};

type ProductSectionProps = {
  title: string;
  description: string;
  className?: string;
  items: Item[];
};

export default function ProductSection({
  title,
  description,
  className,
  items,
}: ProductSectionProps) {
  return (
    <section className={`product-section ${className}`}>
      <div className="product-container">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="items-row">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <div className="item-circle">
                <img src={item.image} alt={item.name} />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
=======
type Item = {
  name: string;
  image: string;
};

type ProductSectionProps = {
  title: string;
  description: string;
  className?: string;
  items: Item[];
};

export default function ProductSection({
  title,
  description,
  className,
  items,
}: ProductSectionProps) {
  return (
    <section className={`product-section ${className}`}>
      <div className="product-container">
        <h2>{title}</h2>
        <p>{description}</p>

        <div className="items-row">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <div className="item-circle">
                <img src={item.image} alt={item.name} />
              </div>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
>>>>>>> b84fc68743fcef89a51b8023a678670672e02ce5
