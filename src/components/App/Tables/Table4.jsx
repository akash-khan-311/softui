import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Table1b = () => {
  const tableData = [
    {
      name: "Akash Khan",
      job: "MERN Stack Developer",
      email: "akashkhan@gmail.com",
      created: "01/02/2021",
    },
    {
      name: "John Smith",
      job: "Software engineer",
      email: "johnsmith@rhyta.com",
      created: "10/05/2021",
    },
    {
      name: "Jane Doe",
      job: "UX/UI designer",
      email: "janedoe@rhyta.com",
      created: "01/02/2021",
    },
    {
      name: "Peter Hernandez",
      job: "Training manager",
      email: "peterkhernandez@rhyta.com",
      created: "30/10/2021",
    },
    {
      name: "Candice Palmieri",
      job: "Landscape contractor",
      email: "candicejpalmieri@armyspy.com ",
      created: "16/06/2020",
    },
  ];

  return (
   <CodeBox stringCode={`import React from 'react'
   const tableData = [
    {
      name: "Akash Khan",
      job: "MERN Stack Developer",
      email: "akashkhan@gmail.com",
      created: "01/02/2021",
    },
    {
      name: "John Smith",
      job: "Software engineer",
      email: "johnsmith@rhyta.com",
      created: "10/05/2021",
    },
    {
      name: "Jane Doe",
      job: "UX/UI designer",
      email: "janedoe@rhyta.com",
      created: "01/02/2021",
    },
    {
      name: "Peter Hernandez",
      job: "Training manager",
      email: "peterkhernandez@rhyta.com",
      created: "30/10/2021",
    },
    {
      name: "Candice Palmieri",
      job: "Landscape contractor",
      email: "candicejpalmieri@armyspy.com ",
      created: "16/06/2020",
    },
  ];
const Table = () => {
    return (
        <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
      <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">
        {/* :TABLE HEAD */}
        <thead className="min-w-full bg-gray-800 text-left text-gray-100">
          <tr>
            {/* ::Name */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Name
            </th>
            {/* ::Job Title */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Job Title
            </th>
            {/* ::Email */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Email
            </th>
            {/* ::Created Date */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Created
            </th>
            {/* ::Actions */}
            <th
              className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Actions
            </th>
          </tr>
        </thead>

        {/* :TABLE BODY */}
        <tbody className="">
          {tableData.map((user, index) => (
            <tr
              key={user.name}
              className={\`\${
                index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
              } whitespace-nowrap\`}
            >
              {/* ::User Name */}
              <td className="py-3 px-4 text-base text-gray-200 font-semibold">
                {user.name}
              </td>
              {/* ::User Job Title */}
              <td className="py-3 px-4 text-base text-gray-400 font-medium">
                {user.job}
              </td>
              {/* ::User Email */}
              <td className="py-3 px-4 text-base text-gray-400 font-medium">
                {user.email}
              </td>
              {/* ::User Created Date */}
              <td className="py-3 px-4 text-base text-gray-400 font-medium">
                {user.created}
              </td>
              {/* ::Action Buttons */}
              <td className="py-3 px-4 flex justify-around items-center space-x-6 text-base text-gray-700 font-medium">
                {/* :::edit button */}
                <button
                  type="button"
                  className="text-sm text-indigo-400 font-semibold hover:underline hover:text-indigo-500"
                >
                  Edit
                </button>
                {/* :::delete button */}
                <button
                  type="button"
                  className="text-sm text-red-400 font-semibold hover:text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}   
export default Table
`}>
     <div className="mx-auto pb-8 w-full max-w-7xl overflow-x-auto">
      <table className="px-4 min-w-full rounded-md border border-gray-200 overflow-hidden">
        {/* :TABLE HEAD */}
        <thead className="min-w-full bg-gray-800 text-left text-gray-100">
          <tr>
            {/* ::Name */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Name
            </th>
            {/* ::Job Title */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Job Title
            </th>
            {/* ::Email */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Email
            </th>
            {/* ::Created Date */}
            <th
              className="py-3 px-4 text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Created
            </th>
            {/* ::Actions */}
            <th
              className="py-3 px-4 text-center text-sm font-medium uppercase tracking-wide"
              scope="col"
            >
              Actions
            </th>
          </tr>
        </thead>

        {/* :TABLE BODY */}
        <tbody className="">
          {tableData.map((user, index) => (
            <tr
              key={user.name}
              className={`${
                index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"
              } whitespace-nowrap`}
            >
              {/* ::User Name */}
              <td className="py-3 px-4 text-base text-gray-200 font-semibold">
                {user.name}
              </td>
              {/* ::User Job Title */}
              <td className="py-3 px-4 text-base text-gray-400 font-medium">
                {user.job}
              </td>
              {/* ::User Email */}
              <td className="py-3 px-4 text-base text-gray-400 font-medium">
                {user.email}
              </td>
              {/* ::User Created Date */}
              <td className="py-3 px-4 text-base text-gray-400 font-medium">
                {user.created}
              </td>
              {/* ::Action Buttons */}
              <td className="py-3 px-4 flex justify-around items-center space-x-6 text-base text-gray-700 font-medium">
                {/* :::edit button */}
                <button
                  type="button"
                  className="text-sm text-indigo-400 font-semibold hover:underline hover:text-indigo-500"
                >
                  Edit
                </button>
                {/* :::delete button */}
                <button
                  type="button"
                  className="text-sm text-red-400 font-semibold hover:text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </CodeBox>
  );
};

export default Table1b;
