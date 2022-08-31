import React from "react";

function ListItem(props) {
    const borderColor = props.taskInfo.status === 'completed' ? 'border-success' : 'border-danger';
    const btnstate = props.taskInfo.status;

    return (
        <div className={"card border " + borderColor}>
            <div className="head">
                <h5 className="card-title">{props.taskInfo.title}</h5>
                <h6 className="card-subtitle mb-2"><a className='small'>from</a> {props.taskInfo.createDate} <a className='small'>to</a> {props.taskInfo.ddate}</h6>
            </div>
            <div className="card-body text-center">
                <p className="card-text">{props.taskInfo.des}</p>
                <button className="btn btn-danger btn-sm" onClick={() => props.onDelete(props.taskInfo.id)}>Delete</button>
                {/* <button className="btn btn-success btn-sm" >Complete</button> */}
                {btnstate === 'completed' &&
                    < button className="btn btn-success btn-sm" disabled>Completed</button>
                }
                {btnstate !== 'completed' &&
                    < button className="btn btn-success btn-sm" onClick={() => props.onComplete(props.taskInfo.id)}>Complete</button>
                }
            </div>
        </div >
    )
}

export default ListItem