import { AllMainProduct, Product, Discount } from "../../UI";
import { v4 } from "uuid";

const MainProduct = ({ mainproduct }) => {
  return (
    <AllMainProduct>
      {mainproduct.map((item) => {
        return (
          <Product key={v4()}>
            <div className="picture">
              <img className="baseImg" src={item.baseImg} alt="" />
              <img className="hoverImg" src={item.hoverImg} alt="" />
            </div>
            <div className="text">
              <a href={item.url}>
                <h3>{item.discription}</h3>
              </a>
              <h4>
                <span>NT$</span>
                {item.price.lowest}
                <span>-NT$</span>
                {item.price.highest}
              </h4>
              <a href="/">
                <button>選擇規格</button>
              </a>
            </div>
            <Discount style={{ display: item.isDiscount ? "block" : "none" }}>
              特價
            </Discount>
          </Product>
        );
      })}
    </AllMainProduct>
  );
};

export default MainProduct;
