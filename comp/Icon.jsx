import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisVertical, faAngleDown, faXmark, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";

export function AddIcon() {
  return <FontAwesomeIcon icon={faPlus} />
}

export function MoreIcon() {
  return <FontAwesomeIcon icon={faEllipsisVertical} />
}

export function ShowIcon(props) {
  return <FontAwesomeIcon icon={faAngleDown} {...props}/>
}

export function CloseIcon() {
  return <FontAwesomeIcon icon={faXmark} />
}

export function EditIcon() {
  return <FontAwesomeIcon icon={faPencil} />
}

export function DeleteIcon() {
  return <FontAwesomeIcon icon={faTrash} />
}