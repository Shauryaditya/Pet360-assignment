function Table({ data }) {
    console.log(data);
    return (
      <table className="table-auto w-full border border-gray-300 rounded-xl mt-4 border-separate" style={{ borderSpacing: "0" }}>
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-normal text-[#666666] rounded-tl-xl">
              Time Slot
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-[#666666]">
              Pet Info
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-[#666666]">
              Pet Parent
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-[#666666]">
              Doctor
            </th>
            <th className="px-4 py-2 text-left text-sm font-normal text-[#666666] rounded-tr-xl">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((appointment, index) => (
            <tr
              key={appointment.id}
              className={`border-t ${
                index === data.length - 1 ? "rounded-b-xl" : ""
              }`}
            >
              <td
                className={`px-4 py-2 text-xs ${
                  index === data.length - 1 ? "rounded-bl-xl" : ""
                }`}
              >
                {appointment.timeSlot}
              </td>
              <td className="px-4 py-2 text-xs">{appointment.petInfo}</td>
              <td className="px-4 py-2 text-xs">{appointment.petParent}</td>
              <td className="px-4 py-2 text-xs">
                <div className="flex flex-col">
                  <span className="font-medium">{appointment?.doctor}</span>
                  <span className="font-light">{appointment?.purpose}</span>
                </div>
              </td>
              <td
              className={`px-4 py-2 text-xs ${
                index === data.length - 1 ? "rounded-br-xl" : ""
              }`}
            >
            <span className={`px-4 py-2 rounded-md ${
                appointment.status === "In Progress"
                  ? "bg-[#ECF4FF] text-[#157AFE] font-medium"
                  : appointment.status === "Completed"
                  ? "bg-[#E6F1E9] text-[#386641] font-medium"
                  : "bg-gray-100 text-gray-700"
              }`}>{appointment.status}</span>  
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  
  export default Table;
  