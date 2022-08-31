import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListItem from './ListItem'

function List() {

    const [tasklist, setTaskList] = useState([
    ]);
    const [taskUpdate, setTaskUpdate] = useState(false)

    useEffect(() => {
        const FbUrl = 'https://task-manager-eacd1-default-rtdb.firebaseio.com/tasks.json';

        axios.get(FbUrl).then(response => {
            if (response.data) {
                setTaskList(Object.values(response.data));
            }
        });
    }, [taskUpdate]);

    const handleComplete = (taskId) => {
        const FbUrl = `https://task-manager-eacd1-default-rtdb.firebaseio.com/tasks/${taskId}.json`;
        axios.patch(FbUrl, { status: "completed" }).then((response) => {
            setTaskUpdate(true)
        });
    }
    const handelDelete = (taskId) => {
        const FbUrl = `https://task-manager-eacd1-default-rtdb.firebaseio.com/tasks/${taskId}.json`;
        axios.delete(FbUrl).then((response) => {
            setTaskUpdate(true)
        });
    }

    const displayTask = () => {
        return tasklist.map((task) => {
            return (
                <ListItem
                    key={task.id}
                    taskInfo={task}
                    onComplete={handleComplete}
                    onDelete={handelDelete} />
            );
        });
    };
    return (
        <div className="container mt-4">
            <h1>Tasks</h1>
            <div className="card-columns">
                {displayTask()}
            </div>
        </div>
    )
}

export default List