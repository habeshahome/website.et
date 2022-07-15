import Button from '@mui/material/Button';

const UsersData = () => {
  return [
    { 
      id: 1, 
      role: 'Comp Admin', 
      permission: "Company Admin",
      username: "Bamlak",
      email: "qintot@gmail",
      firstName: 'Anis', 
      lastName: "Mohamed",
      active: false, 
      regTime: "2022-03-03",
      loginTime: "2022-06-29",
      expiresOn: "2040-01-01",
      renderCell: (params) => {
        return (
            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                <MatEdit index={params.row.id} />
             </div>
        );
     }
    },
    { 
      id: 2, 
      role: 'Comp Admin', 
      permission: "Super User",
      username: "Anis",
      email: "anis.mohamed@devways",
      firstName: 'Anis', 
      lastName: "Mohamed",
      active: true, 
      regTime: "2022-03-03",
      loginTime: "2022-06-29",
      expiresOn: "2040-01-01",
    },
    { 
      id: 3, 
      role: 'Comp Admin', 
      permission: "Super User",
      username: "Anis",
      email: "anis.mohamed@devways",
      firstName: 'Anis', 
      lastName: "Mohamed",
      active: true, 
      regTime: "2022-03-03",
      loginTime: "2022-06-29",
      expiresOn: "2040-01-01",
    },
    { 
      id: 4, 
      role: 'Comp Admin', 
      permission: "Super User",
      username: "Anis",
      email: "anis.mohamed@devways",
      firstName: 'Anis', 
      lastName: "Mohamed",
      active: false, 
      regTime: "2022-03-03",
      loginTime: "2022-06-29",
      expiresOn: "2040-01-01",
    },


  ]
}
export default UsersData();
