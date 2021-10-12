export function Create(props) {
  function submitHandler(ev) {
    ev.preventDefault();
    var title = ev.target.title.value;
    var body = ev.target.body.value;
    props.onCreate(title, body);
  }
  return (
    <article>
      <h1>Create</h1>
      <form onSubmit={submitHandler}>
        <p><input type="text" name="title" /></p>
        <p><textarea name="body"></textarea></p>
        <p><input type="submit" /></p>
      </form>
    </article>
  );
}
