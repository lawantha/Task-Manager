import React from "react";
import { useFormik } from 'formik';
import Moment from 'moment';
import axios from 'axios'
import { v4 as uuid4 } from 'uuid'
import { useState } from "react";
import { Link } from 'react-router-dom'

function TaskForm() {

    const [message, setMessage] = useState('');

    const formik = useFormik({
        initialValues: {
            title: '',
            des: '',
            ddate: '',
        },
        onSubmit: (values, { resetForm }) => {
            const tid = uuid4();
            const FbUrl = `https://task-manager-eacd1-default-rtdb.firebaseio.com/tasks/${tid}.json`;
            const task = { ...values, status: 'new', createDate: (Moment().format('YYYY-MM-DD')), id: tid }
            axios.put(FbUrl, task).then((response) => {
                if (response.status === 200) {
                    console.log('data saved')
                    setMessage('Task added successfully!')
                    resetForm({ values: '' });
                }
            }).catch((error) => {
                console.log(error)
                setMessage('Error')
            });
        },
        validate: (values) => {
            let errors = {};

            if (!values.title) {
                errors.title = 'Title cannot be empty'
            }
            if (!values.des) {
                errors.des = 'Description cannot be empty'
            }
            if (!values.ddate) {
                errors.ddate = 'Due date cannot be empty'
            } else if (values.ddate <= (Moment().format('YYYY-MM-DD'))) {
                errors.ddate = 'Please select a future date'
            }
            return errors
        }
    });


    return (
        <div className="container mt-4">
            <h1>Task form</h1>
            <form className="f1" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label for="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" placeholder="Enter title" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur} />
                    {formik.touched.title && formik.errors.title ? (<div className="small text-danger">{formik.errors.title}</div>) : null}
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <textarea type="text" className="form-control" id="des" name="des" placeholder="Description" onChange={formik.handleChange} value={formik.values.des} onBlur={formik.handleBlur} />
                    {formik.touched.des && formik.errors.des ? (<div className="small text-danger">{formik.errors.des}</div>) : null}
                </div>
                <div className="form-group">
                    <label for="description">Due date</label>
                    <input type="date" className="form-control" id="ddate" name="ddate" placeholder="Due date" onChange={formik.handleChange} value={formik.values.ddate} onBlur={formik.handleBlur} min={Moment().format('YYYY-MM-DD')} />
                    {formik.touched.ddate && formik.errors.ddate ? (<div className="small text-danger">{formik.errors.ddate}</div>) : null}
                </div>
                <button type="submit" className="btn btn-primary float-right">Submit</button>

                {/* {message === 'Error' ? <div className="alert alert-primary mt-4">
                    {message} - Click here to see <Link className="small" to="/list"> all tasks</Link>
                </div> : null} */}
                {message ? <div className="alert alert-primary mt-4">
                    {message} - Click here to see <Link className="small" to="/list"> all tasks</Link>
                </div> : null}

            </form>
        </div>
    )
}

export default TaskForm;