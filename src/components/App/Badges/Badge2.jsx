import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Badge2 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`
 {/* Primary */}
<button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">Primary
  <span className="absolute bg-blue-500 text-blue-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">99+</span>
</button>
{/* Secondary */}
<button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">Secondary
  <span className="absolute bg-gray-600 text-gray-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">99+</span>
</button>
{/* Success */}
<button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">Success
  <span className="absolute bg-green-700 text-green-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">99+</span>
</button>
{/* Danger */}
<button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">Danger
  <span className="absolute bg-red-600 text-red-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">99+</span>
</button>
{/* Warning */}
<button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">Warning
  <span className="absolute bg-yellow-500 text-yellow-900 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">99+</span>
</button>
{/* Info */}
<button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">Info
  <span className="absolute bg-teal-300 text-teal-900 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">99+</span>
</button>
{/* Light */}
<button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">Light
  <span className="absolute bg-gray-200 text-gray-900 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">99+</span>
</button>
{/* Dark */}
<button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">Dark
  <span className="absolute bg-gray-900 text-gray-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">99+</span>
</button>`}
      >
        <div className="flex  flex-wrap justify-evenly items-center">
          <button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">
            Primary
            <span className="absolute bg-blue-500 text-blue-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
              99+
            </span>
          </button>
          <button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">
            Secondary
            <span className="absolute bg-gray-600 text-gray-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
              99+
            </span>
          </button>
          <button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">
            Success
            <span className="absolute bg-green-700 text-green-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
              99+
            </span>
          </button>
          <button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">
            Danger
            <span className="absolute bg-red-600 text-red-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
              99+
            </span>
          </button>
          <button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">
            Warning
            <span className="absolute bg-yellow-500 text-yellow-900 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
              99+
            </span>
          </button>
          <button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">
            Info
            <span className="absolute bg-teal-300 text-teal-900 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
              99+
            </span>
          </button>
          <button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">
            Light
            <span className="absolute bg-gray-200 text-gray-900 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
              99+
            </span>
          </button>
          <button className="relative bg-blue-700 hover:bg-blue-800 duration-300 py-2 px-4 text-blue-100 rounded">
            Dark
            <span className="absolute bg-gray-900 text-gray-100 px-2 py-1 text-xs font-bold rounded-full -top-3 -right-3">
              99+
            </span>
          </button>
        </div>
      </CodeBox>
    </div>
  );
};
export default Badge2;
