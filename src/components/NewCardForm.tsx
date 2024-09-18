const NewCardForm = () => {
  return (
    <form className="hidden group-hover/new-card:flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue" onSubmit={() => alert('Create card')}>
      <input className="w-11/12 resize-none rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue" type="text" placeholder="Title" />
      <textarea className="w-11/12 resize-none border-0 bg-off-white-light text-blue" placeholder="Description"></textarea>
      <button type="submit" className="w-full p-4">Save</button>
    </form>
  );
};

export default NewCardForm;