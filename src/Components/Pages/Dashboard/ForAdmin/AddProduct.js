import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "4fc398737b73ab4a5927cdcc90d58258";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const Product = {
            name: data.name,
            price: data.price,
            minimumunit: data.minimumunit,
            availableunit: data.availableunit,
            description: data.description,
            img: img,
          };
          // send to your database
          fetch("https://aitch-s-light.herokuapp.com/product", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(Product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Product added successfully");
                reset();
              } else {
                toast.error("Failed to add the Product");
              }
            });
        }
      });
  };
  return (
    <div>
      Add A Product
      <div className="card glass w-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="md:flex gap-x-8">
            <div className="basis-1/2">
              <label className="label">
                <span className="label-text">Product name</span>
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="basis-1/2">
              <label className="label">
                <span className="label-text"> price (per unit)</span>
              </label>
              <input
                name="price"
                type="number"
                className="input input-bordered w-full"
                {...register("price", {
                  required: {
                    value: true,
                    message: "price is Required",
                  },
                })}
              />
            </div>
          </div>
          <div className="md:flex gap-x-8">
            <div className="basis-1/2">
              <label className="label">
                <span className="label-text">minimum order quantity</span>
              </label>
              <input
                name="minimumunit"
                type="number"
                className="input input-bordered w-full"
                {...register("minimumunit", {
                  required: {
                    value: true,
                    message: "minimum order quantity is Required",
                  },
                })}
              />
            </div>
            <div className="basis-1/2">
              <label className="label">
                <span className="label-text">available quantity</span>
              </label>
              <input
                name="availableunit"
                type="number"
                className="input input-bordered w-full"
                {...register("availableunit", {
                  required: {
                    value: true,
                    message: "available quantity is Required",
                  },
                })}
              />
            </div>
          </div>

          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            name="description"
            type="text"
            className="input input-bordered"
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
            })}
          />
          <label className="label">
            <span className="label-text">Product image</span>
          </label>
          <label className="block">
            <span className="sr-only">Choose product photo</span>
            <input
              type="file"
              className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
          </label>
          <div className="card-actions justify-end">
            <input type="submit" value="add product" className="btn"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
