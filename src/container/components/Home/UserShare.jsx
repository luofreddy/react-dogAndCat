import { UserShareUI } from "../../UI";
import { v4 } from "uuid";

const UserShare = ({ dataShare }) => {
  return (
    <div style={{ display: "flex", width: "90%", margin: "auto" }}>
      {dataShare.map((item) => {
        return (
          <UserShareUI key={v4()}>
            <div>
              <img src={item.img} alt="" />
            </div>
            <h3 className="petName">{item.petName}</h3>
            <span className="product">{item.product}</span>
            <p className="share">{item.share}</p>
          </UserShareUI>
        );
      })}
    </div>
  );
};

export default UserShare;
