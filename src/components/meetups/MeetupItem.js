import classes from './MeetupList.module.css'
function MeetupItem(props) {
    return (<li>
        <div>
            <img className={classes.image} src={props.image} alt={props.tittle} />
        </div>
        <div>
            <h3>{props.tittle}</h3>
            <address>{props.address}</address>
            <p>{props.address}</p>
        </div>
        <div>
            <button>To Favorites</button>
        </div>
  </li>
  )
}

export default MeetupItem
