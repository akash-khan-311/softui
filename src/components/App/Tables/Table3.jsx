import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Table3 = () => {
  return (
    <div>
      <CodeBox
        stringCode={`<div className="overflow-x-auto">
 <table className="min-w-full divide-y divide-gray-200 ">
  <thead className="bg-gray-50">
    <tr>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Name
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Title
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Status
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Role
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Email
      </th>
      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        Actions
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200 ">
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26uvVa10T_tQmtCFirH0aTJN9JpM_BHZQtw&usqp=CAU" alt />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              Super Man
            </div>
            <div className="text-sm text-gray-500">
              super.man@example.com
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
        <div className="text-sm text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        Admin
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        super.man@example.com
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
        <a href="#" className="ml-2 text-red-600 hover:text-red-900">Delete</a>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26uvVa10T_tQmtCFirH0aTJN9JpM_BHZQtw&usqp=CAU" alt />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              Super Man
            </div>
            <div className="text-sm text-gray-500">
              super.man@example.com
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
        <div className="text-sm text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        Admin
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        super.man@example.com
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
        <a href="#" className="ml-2 text-red-600 hover:text-red-900">Delete</a>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26uvVa10T_tQmtCFirH0aTJN9JpM_BHZQtw&usqp=CAU" alt />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              Super Man
            </div>
            <div className="text-sm text-gray-500">
              super.man@example.com
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
        <div className="text-sm text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        Admin
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        super.man@example.com
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
        <a href="#" className="ml-2 text-red-600 hover:text-red-900">Delete</a>
      </td>
    </tr>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26uvVa10T_tQmtCFirH0aTJN9JpM_BHZQtw&usqp=CAU" alt />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">
              Super Man
            </div>
            <div className="text-sm text-gray-500">
              super.man@example.com
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">Regional Paradigm Technician</div>
        <div className="text-sm text-gray-500">Optimization</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
          Active
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        Admin
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        super.man@example.com
      </td>
      <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
        <a href="#" className="ml-2 text-red-600 hover:text-red-900">Delete</a>
      </td>
    </tr>
    {/* More rows... */}
  </tbody>
 </table>
</div>`}
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 ">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26uvVa10T_tQmtCFirH0aTJN9JpM_BHZQtw&usqp=CAU"
                        alt
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Super Man
                      </div>
                      <div className="text-sm text-gray-500">
                        super.man@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Regional Paradigm Technician
                  </div>
                  <div className="text-sm text-gray-500">Optimization</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  super.man@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                  <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26uvVa10T_tQmtCFirH0aTJN9JpM_BHZQtw&usqp=CAU"
                        alt
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Super Man
                      </div>
                      <div className="text-sm text-gray-500">
                        super.man@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Regional Paradigm Technician
                  </div>
                  <div className="text-sm text-gray-500">Optimization</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  super.man@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                  <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26uvVa10T_tQmtCFirH0aTJN9JpM_BHZQtw&usqp=CAU"
                        alt
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Super Man
                      </div>
                      <div className="text-sm text-gray-500">
                        super.man@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Regional Paradigm Technician
                  </div>
                  <div className="text-sm text-gray-500">Optimization</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  super.man@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                  <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26uvVa10T_tQmtCFirH0aTJN9JpM_BHZQtw&usqp=CAU"
                        alt
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Super Man
                      </div>
                      <div className="text-sm text-gray-500">
                        super.man@example.com
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    Regional Paradigm Technician
                  </div>
                  <div className="text-sm text-gray-500">Optimization</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Admin
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  super.man@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                  <a href="#" className="ml-2 text-red-600 hover:text-red-900">
                    Delete
                  </a>
                </td>
              </tr>
              {/* More rows... */}
            </tbody>
          </table>
        </div>
      </CodeBox>
    </div>
  );
};
export default Table3;
