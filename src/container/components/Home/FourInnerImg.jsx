import { InnerImg } from "../../UI";
import { v4 } from "uuid";

const FourInnerImg = ({ InnerImgs }) => {
  return (
    <div style={{ display: "flex" }}>
      {InnerImgs.map((item) => {
        return (
          <InnerImg key={v4()}>
            {item.url ? (
              <a href={item.url}>
                <img src={item.img} alt="" />
              </a>
            ) : (
              <img src={item.img} alt="" />
            )}
          </InnerImg>
        );
      })}
    </div>
  );
};

export default FourInnerImg;
