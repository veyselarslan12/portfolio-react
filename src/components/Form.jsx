function Form() {
  return (
    <>
      <div className="justify-center">
        <form className="max-w-[50%] bg-base-100 p-6 rounded-lg shadow-md">
          <div className="form-control mb-4">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label" htmlFor="comment">
              <span className="label-text">Comment</span>
            </label>
            <textarea
              id="comment"
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;