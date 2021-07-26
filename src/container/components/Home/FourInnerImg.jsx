import {InnerImg} from '../../UI'


const FourInnerImg = ({InnerImgs}) => {
  return (
    <div style={{display:'flex'}}>
      {InnerImgs.map(item=>{
        return <InnerImg>
          {
          item.url? <a href={item.url}><img src={item.img} alt="" /></a>:<img src={item.img} alt="" />
          }
        </InnerImg>
      })}
      
    </div>
  );
};

export default FourInnerImg;