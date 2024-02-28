import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Alert3 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`<div className="bg-green-100 max-w-sm mx-auto border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
  <p className="text-lg font-semibold">Order Status: Confirmed</p>
  <p>Your order has been successfully confirmed and is now being processed.</p>
</div>`}
      >
        <div className="bg-green-100 max-w-sm mx-auto border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
          <p className="text-lg font-semibold">Order Status: Confirmed</p>
          <p>
            Your order has been successfully confirmed and is now being
            processed.
          </p>
        </div>
      </CodeBox>
    </div>
  );
};
export default Alert3;
