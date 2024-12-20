import styled from './Card.module.css' ;

const Card = (props) => {
    return (
        <div className={styled.card}>
            {props.children}
        </div>
    )
} ;

export default Card ;