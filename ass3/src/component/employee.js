import React, {useState} from 'react';
function Employee() {

      const [data, setData] = useState({
          name: "",
          gender: "",
          age: "",
          designation: "",
          dept: "",
          join_date: ""
      })
      let row=[]
      const current_data = (e) => {
        // console.log(e);
          setData({
              ...data,
              [e.target.name]: e.target.value
          })
          // row.push(data);
          // console.log();
      }

      // const del(val){
      //   console.log(val);
      //   }
      const inputdata = (e) => {
          e.preventDefault()
          console.log(data);
          let length = localStorage.length
            console.log(length);
          if (data.name.length > 0 && data.age.length > 0 && data.designation.length > 0  && data.join_date.length > 0) {
              if (Number.isInteger(parseInt(data.age))) {
                  document.getElementById("employee-data").innerHTML += `
                  <tr id=${data.name + length}>
                  <td>${data.name}</td>
                  <td>${data.dept}</td>
                  <td>
                      <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1">
                          <label class="form-check-label" for="exampleCheck1"></label>
                      </div>
                  </td>
                  <td>
                      <button type="button" class="btn btn-outline-info btn-sm" data-toggle="modal" data-target="#addEmployeeModal"  id=${data.name + length}>
                          <i class="fa fa-edit"></i>&nbsp; Edit
                          </button>
                      <button onClick={del(data.name)} type="button" class="btn btn-outline-danger btn-sm"  id=${data.name + length}>
                          <i class="fa fa-trash"></i>&nbsp; Delete
                          </button>
                  </td>
                  </tr>`
                  // temp=[... this.temp,data]
                  row.push(data)
                  alert("Employee added")
                  console.log(row)
              } else {
                  alert("Age must be an integer")
              }
          } else {
              alert("All fields are required")
          }
      }

      return (
          <div>
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-12">
                          <div className="question-dashboard">
                              <div className="card mt-4 mb-3 mb-md-4">
                                  <div className="card-body p-3 text-left">
                                      <h5 className="text-secondary mb-2">
                                          Available: <span className="font-weight-bold ml-1 text-dark">08</span>
                                      </h5>
                                      <h5 className="text-secondary">
                                          Total: <span className="font-weight-bold ml-1 text-dark">50</span>
                                      </h5>

                                      <button className="btn btn-primary mt-4" data-toggle="modal" data-target="#addEmployeeModal">
                                          <i className="fa fa-plus"></i>
                                          &nbsp; Add Employee
                                      </button>
                                  </div>
                              </div>

                              <div className="table-responsive mt-3 mt-md-4 mb-2">
                                  <table className="table table-bordered">
                                      <thead>
                                          <tr>
                                              <th>Name</th>
                                              <th>Department</th>
                                              <th>Available</th>
                                              <th>View Details</th>
                                          </tr>
                                      </thead>
                                      <tbody id="employee-data">

                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="modal fade" id="addEmployeeModal" tabIndex="-1" role="dialog" aria-labelledby="addEmployeeModal"
                  aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                          <div className="modal-header pt-3 pb-2">
                              <h5 className="modal-title" id="exampleModalCenterTitle">Add Employee</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                              </button>
                          </div>
                          <div className="modal-body">
                              <form onSubmit={inputdata}>
                                  <div className="form-row ">
                                      <div className="form-group col-md-6">
                                          <label htmlFor="" className="mb-1">Name</label>
                                          <input type="text" className="form-control" placeholder="Enter Name"
                                              name="name"
                                              onChange={current_data}
                                              value={data.name}
                                              required />
                                      </div>
                                      <div className="form-group col-md-6">
                                          <label htmlFor="" className="mb-1">Gender</label>
                                          <select className="form-control" id="exampleFormControlSelect1"
                                              name="gender"
                                              onChange={current_data}
                                              value={data.gender}
                                          >
                                              <option>Select</option>
                                              <option>Male</option>
                                              <option>Female</option>
                                          </select>
                                      </div>
                                      <div className="form-group col-md-6">
                                          <label htmlFor="" className="mb-1">Age</label>
                                          <input type="text" className="form-control" placeholder="Enter Age"
                                              name="age"
                                              onChange={current_data}
                                              value={data.age}
                                          />
                                      </div>
                                      <div className="form-group col-md-6">
                                          <label htmlFor="" className="mb-1">Designation</label>
                                          <input type="text" className="form-control" placeholder="Enter Designation"
                                              name="designation" onChange={current_data}
                                              value={data.designation}
                                            />
                                      </div>
                                      <div className="form-group col-md-6">
                                          <label htmlFor="" className="mb-1">Department</label>
                                          <select className="form-control" id="exampleFormControlSelect1"
                                              name="dept"
                                              onChange={current_data}
                                              value={data.dept}
                                          >
                                              <option>Select</option>
                                              <option>Frontend Developer</option>
                                              <option>Backend Developer</option>
                                              <option>Testing</option>
                                              <option>Deployment</option>
                                          </select>
                                      </div>
                                      <div className="form-group col-md-6">
                                          <label htmlFor="" className="mb-1">Joining Date</label>
                                          <input type="date" className="form-control" placeholder=""
                                              name="join_date" onChange={current_data}
                                              value={data.join_date}
                                             />
                                      </div>
                                  </div>
                              </form>
                          </div>
                          <div className="modal-footer">
                              <button type="button" className="btn btn-outline-danger btn-sm" data-dismiss="modal">Cancel</button>
                              <button  onClick={inputdata} type="button" className="btn btn-success btn-sm">Save</button>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      )
}

export default Employee;
