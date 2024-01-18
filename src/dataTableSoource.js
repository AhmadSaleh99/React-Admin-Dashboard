export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.userName}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 220 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    userName: "Snow",
    img: "",
    status: "active",
    email: "sasas@gmail.com",
    age: 35,
  },
  {
    id: 2,
    userName: "Snow",
    img: "",
    status: "pending",
    email: "sasas@gmail.com",
    age: 35,
  },
  {
    id: 3,
    userName: "Snow",
    img: "",
    status: "passive",
    email: "sasas@gmail.com",
    age: 35,
  },
  {
    id: 4,
    userName: "Snow",
    img: "",
    status: "active",
    email: "sasas@gmail.com",
    age: 35,
  },
  {
    id: 5,
    userName: "Snow",
    img: "",
    status: "active",
    email: "sasas@gmail.com",
    age: 35,
  },
  {
    id: 6,
    userName: "Snow",
    img: "",
    status: "active",
    email: "sasas@gmail.com",
    age: 35,
  },
  {
    id: 7,
    userName: "Snow",
    img: "",
    status: "active",
    email: "sasas@gmail.com",
    age: 35,
  },
  {
    id: 8,
    userName: "Snow",
    img: "",
    status: "active",
    email: "sasas@gmail.com",
    age: 35,
  },
  {
    id: 9,
    userName: "Snow",
    img: "",
    status: "active",
    email: "sasas@gmail.com",
    age: 35,
  },
];
