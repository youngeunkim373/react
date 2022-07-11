import "./MyJsx003.css";

function MyJsx003() {
  const numX = 3;
  const numY = 5;
  return (
    <>
      <div style={{ backgroundColor: "aqua", fontSize: "20px" }}>
        {`${numX} + ${numY} = ${numX + numY}`}
      </div>

      <div className="line">line test</div>
    </>
  );
}

export default MyJsx003;
