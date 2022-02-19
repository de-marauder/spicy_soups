import React from 'react';

// import classes from './Input.module.css'

const Input = (props) => {
    const style = props.className ? props.className : "" 
    return (
        (props.type === 'textarea') ?
            <textarea className={style + " bg-inherit col-span-2 border-2 rounded-2xl px-3 py-2 border-orange-600"}
                rows={5}
                name={props.name}
                type={props.type}
                value={props.value}
                required={props.required}
                placeholder={props.placeholder}
                onChange={props.update}></textarea> :
            <input className={style + " bg-inherit border-2 rounded-2xl px-3 py-2 border-orange-600"}
                name={props.name}
                type={props.type}
                value={props.value}
                required={props.required}
                placeholder={props.placeholder}
                onChange={props.update} />
    )
}

export default Input;