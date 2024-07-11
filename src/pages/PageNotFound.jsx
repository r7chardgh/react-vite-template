function PageNotFound() {
  return (
    <section className="container page-not-found">
      <h1 className="title">404</h1>
      <section className="content">
        <span className="message">
          <h2 className="message--large">oops!</h2>
          <h3 className="message--medium">we couldn&apos;t find that page.</h3>
          <p className="message--small">
            maybe you can find what you need here?
          </p>
        </span>
      </section>
    </section>
  );
}

export default PageNotFound;
