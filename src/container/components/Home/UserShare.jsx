import { UserShareUI } from "../../UI";

const UserShare = ({dataShare}) => {
  return (
    <div style={{display:"flex"}}>
      {
        dataShare.map(item=>{
          return <UserShareUI>
            <img src={item.img} alt="" />
            <h3 className='petName'>{item.petName}</h3>
            <span className='product'>{item.product}</span>
            <p className='share'>{item.share}</p>
          </UserShareUI>
        })
      }
    </div>
  );
};

export default UserShare;