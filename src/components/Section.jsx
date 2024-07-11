import Test from "../pages/Test";

function Section({ index, ...props }) {
  const renderSwitch = (id) => {
    switch (id) {
      case 1:
        return <Test />;

      default:
        return (
          <div>
            <h1>No sections</h1>
          </div>
        );
    }
  };
  return <section {...props}>{renderSwitch(index)}</section>;
}

export default Section;
