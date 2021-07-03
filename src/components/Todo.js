import {useState} from 'react';
import Backdrop from './Backdrop';
import Modal from './Modal';

const Todo = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [todoIsOpen, setTodoIsOpen] = useState(true);

    const deleteHandler = () =>{
        setModalIsOpen(true);
    }

    const closeModalHandler = () =>{
        setModalIsOpen(false);
    }

    return <div className='card'>
        <h2>{props.name}</h2>
        <div className='actions'>
            <button className='btn' onClick={deleteHandler}>{props.bname}</button>
        </div>
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
    </div>
}

Todo.defaultProps = {
    bname : "Delete"
}
export default Todo;