const MenuCard = ({menu}) => {
  return (
    <div className="menu-card">
      <h5>{ menu.name }  &nbsp; </h5>
      <h5> { menu.price}</h5>
    </div>
  )
}

export default MenuCard;