import React from 'react';
import "./AddService.css";
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch("http://localhost:4000/services", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Successfully Added!");
                    reset();
                }
            })
        // axios("http://localhost:4000/services", data)
        //     .then(res => console.log(res))
    };

    return (
        <div className='add-service'>
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="Name" />

                <textarea {...register("description", { required: true })} placeholder="Description" />

                <input type="number" {...register("price")} placeholder="Price" />

                <input {...register("img")} placeholder="Image Url" />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;