import styles from './ChangeTitle.module.css';

function ChangeTitle(props){
    return(
        <div>
            <h1 className={styles.h1}>{props.title}</h1>
        </div>
    )
}

export default ChangeTitle;