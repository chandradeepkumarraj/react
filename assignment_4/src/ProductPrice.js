function ProductPrice() {
  function calculateDiscount(price, discountPercent) {
    const discountAmount = (price * discountPercent) / 100;
    return price - discountAmount;
  }

  return (
    <div>
      <h3>Final Price: Rs {calculateDiscount(500, 10)}</h3>
    </div>
  );
}

export default ProductPrice;
