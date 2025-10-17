import { Link } from 'react-router-dom';
export default function Item({item}){
  return (
    <div style={{border:'1px solid #ddd',borderRadius:8,padding:12,width:220,textAlign:'center'}}>
      <img src={item.img || item.image || ''} alt={item.name} style={{width:'100%',height:140,objectFit:'cover',borderRadius:6}} />
      <h4>{item.name}</h4>
      <p style={{color:'#422100',fontWeight:700}}>${item.price}</p>
      <Link to={`/item/${item.id}`}><button style={{background:'var(--green)',color:'#fff',border:0,padding:'0.5rem 1rem',borderRadius:6}}>Ver detalle</button></Link>
    </div>
  )
}
